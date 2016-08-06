-module(region_worker).
-include("../include/aws_info.hrl").
-behaviour(gen_server).

%% API
-export([
         start_link/4,
         get_region_data/3,
         get_all_regions_data/2,
         remove_volume/3,
         remove_vpc/3
        ]).

%% gen_server callbacks
-export([init/1, handle_call/3, handle_cast/2, handle_info/2,
         terminate/2, code_change/3]).

-define(SERVER, ?MODULE).


-record(state, {
          account :: binary(),
          credentials = maps:new(),
          region :: binary(),
          type :: instance | volume | vpc,
          cached_json = <<>> :: binary(),
          cached_at :: erlang:timestamp(),
          worker_pid :: pid(),
          delete_worker_pid :: pid()
         }).

%%%===================================================================
%%% API
%%%===================================================================
start_link(Account, Region, Credentials, Type) ->
  MyName = region_worker_name(Account, Region, Type),
  gen_server:start_link({local, MyName}, ?MODULE, [Account, Region, Credentials, Type], []).

get_region_data(Account, Region, Type) ->
  MyName = region_worker_name(Account, Region, Type),
  gen_server:call(MyName, get_json).

get_all_regions_data(Account, Type) ->
  {ok, Regions} = region_getter_worker:get_regions(),
  lists:map(fun(Region) -> get_and_wrap_data(Account, Region, Type) end, Regions).

remove_volume(Account, Region, VolumeId) ->
  MyName = region_worker_name(list_to_binary(Account), list_to_binary(Region), volume),
  gen_server:cast(MyName, {remove_volume, {Region, VolumeId}}).

remove_vpc(Account, Region, VpcId) ->
  MyName = region_worker_name(list_to_binary(Account), list_to_binary(Region), vpc),
  gen_server:cast(MyName, {remove_vpc, {Region, VpcId}}).

%%%===================================================================
%%% gen_server callbacks
%%%===================================================================
init([Account, Region, Credentials, Type]) ->

  {A, B, C} = now(),
  random:seed(A, B, C),
  NumGaps = random:uniform(21),
  timer:send_interval(timer:seconds((49 + NumGaps)), refresh_data),
  self()! refresh_data,
  {ok, #state{account = Account,
              region = Region,
              type = Type,
              credentials = Credentials}}.

handle_call(get_json, _From, State = #state{cached_json = Json,
                                            cached_at = CachedAt}) ->
  {reply, {ok, Json, CachedAt}, State}.


handle_cast({remove_volume, {Region, VolumeId}}, State = #state{type = volume,
                                                               delete_worker_pid = undefined,
                                                               credentials = Credentials}) ->
  Self = self(),
  WorkerPid = spawn_link(fun() -> perform_remove_volume(Self, Region, VolumeId, Credentials) end),
  {noreply, State#state{delete_worker_pid = WorkerPid}};

handle_cast({remove_volume, {_, _}}, State = #state{type = volume}) ->
  {noreply, State};


handle_cast({remove_vpc, {Region, VpcId}}, State = #state{type = vpc,
                                                          delete_worker_pid = undefined,
                                                          credentials = Credentials}) ->
  Self = self(),
  WorkerPid = spawn_link(fun() -> perform_remove_vpc(Self, Region, VpcId, Credentials) end),
  {noreply, State#state{delete_worker_pid = WorkerPid}};

handle_cast({remove_vpc, {_, _}}, State = #state{type = vpc}) ->
  {noreply, State}.


handle_info(refresh_data, State = #state {type = Type,
                                          region = Region,
                                          account = Account,
                                          worker_pid = undefined,
                                          credentials = Credentials}) ->
  Self = self(),
  WorkerPid = spawn_link(fun() -> get_aws_info(Self, Region, Type, Account, Credentials) end),
  {noreply, State#state{worker_pid = WorkerPid}};

handle_info(refresh_data, State) ->
  %% Ignore new requests is there is a worker already getting the data
  {noreply, State};

handle_info({new_json, Json}, State = #state{region = Region,
                                            type = Type,
                                            account = Account}) ->
  ?RAISE_INFO_BUS_MSG(#aws_info_bus_msg{
                         region = Region,
                         type = Type,
                         account = Account,
                         json = wrap_json(Account, Region, Type, Json)}),
  {noreply, State#state{worker_pid = undefined,
                        cached_at = os:timestamp(),
                        cached_json = Json}};

handle_info(delete_succeeded, State) ->
  {noreply, State};

handle_info(vpc_delete_failed, State) ->
  {noreply, State};

handle_info(volume_delete_failed, State) ->
  {noreply, State}.


terminate(_Reason, _State) ->
  ok.

code_change(_OldVsn, State, _Extra) ->
  {ok, State}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
get_aws_info(ParentPid, Region, Type, Account, Credentials) ->
  Name = region_worker_name(Account, Region, Type),
  RegionList = binary_to_list(Region),
  RoleAccessKeyId = maps:get(role_access_key_id, Credentials),
  RoleSecretAccessKey = maps:get(role_secret_access_key, Credentials),
  RoleSessionToken = maps:get(role_session_token, Credentials),

  PrivDir = code:priv_dir(region_app),
  ScriptFileName = filename:join([PrivDir, "scripts", "aws_credentials_wrapper.sh"]),

  Ec2Command = case Type of
                 instance -> "describe-instances";
                 volume ->  "describe-volumes";
                 vpc -> "describe-vpcs"
                 end,
  AwsCommand = "aws ec2 --region " ++ RegionList ++ " " ++ Ec2Command,

  case os_cmd_helper:os_cmd(ScriptFileName,
                            [AwsCommand, RoleAccessKeyId, RoleSecretAccessKey, RoleSessionToken] ,
                            [flatten]) of
    {ok, Json} -> ParentPid ! {new_json, list_to_binary(Json)};
    Other ->
      io:format(user, "Got bad data back - retrying~n~p~n", [Other]),
      timer:send_after(timer:seconds(10), ParentPid, refresh_data)
  end,
  ok.

perform_remove_volume(ParentPid, Region, VolumeId, Credentials) ->
  PrivDir = code:priv_dir(region_app),
  ScriptFileName = filename:join([PrivDir, "scripts", "aws_credentials_wrapper.sh"]),
  Cmd = ScriptFileName,

  AwsCommand = "aws ec2 delete-volume --volume-id " ++ VolumeId ++ " --region " ++ Region,
  RoleAccessKeyId = maps:get(role_access_key_id, Credentials),
  RoleSecretAccessKey = maps:get(role_secret_access_key, Credentials),
  RoleSessionToken = maps:get(role_session_token, Credentials),
  Args = [AwsCommand, RoleAccessKeyId, RoleSecretAccessKey, RoleSessionToken],

  case os_cmd_helper:os_cmd(Cmd, Args, [find_executable, flatten]) of
    {ok, _} -> ParentPid ! delete_succeeded;
    Other ->
      io:format(user, "Ffailed to remove volume ~p~n", [Other]),
      ParentPid ! volume_delete_failed
  end,
  ok.

perform_remove_vpc(ParentPid, Region, VpcId, Credentials) ->
  PrivDir = code:priv_dir(region_app),
  DeleteScriptFileName = filename:join([PrivDir, "scripts", "delete_vpc_and_related.sh"]),
  WrapperScriptFileName = filename:join([PrivDir, "scripts", "aws_credentials_wrapper.sh"]),
  Cmd = WrapperScriptFileName,
  DeleteCommand = string:join([DeleteScriptFileName, VpcId, Region], " "),

  RoleAccessKeyId = maps:get(role_access_key_id, Credentials),
  RoleSecretAccessKey = maps:get(role_secret_access_key, Credentials),
  RoleSessionToken = maps:get(role_session_token, Credentials),
  Args = [DeleteCommand, RoleAccessKeyId, RoleSecretAccessKey, RoleSessionToken],

  case os_cmd_helper:os_cmd(Cmd, Args, [flatten]) of
    {ok, Message} -> io:format(Message),
                     ParentPid ! delete_succeeded;
    Other ->
      io:format(user, "Failed to remove vpc ~p~n", [Other]),
      ParentPid ! vpc_delete_failed
  end,
%%  Res = os:cmd(Cmd ++ " " ++ VpcId ++ " " ++ Region),
%%  io:format("~p~n", [Res]),
  ok.


region_worker_name(Account, Region, Type) ->
  TypeBin = atom_to_binary(Type, utf8),
  binary_to_atom(<<Account/binary, "_", Region/binary, "_", TypeBin/binary>>, utf8).

get_and_wrap_data(Account, Region, Type) ->
  {ok, Json, _} = get_region_data(Account, Region, Type),
  wrap_json(Account, Region, Type, Json).

wrap_json(Account, Region, Type, Json) ->
  <<"{\"Region\":\"", Region/binary,
    "\", \"Type\":\"", (atom_to_binary(Type, utf8))/binary,
    "\", \"Account\":\"", Account/binary,
    "\", \"Payload\":", Json/binary, "}">>.
