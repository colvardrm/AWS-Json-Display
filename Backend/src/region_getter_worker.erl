%%%-------------------------------------------------------------------
%%% @author Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%% @copyright (C) 2016, Cloud User
%%% @doc
%%%
%%% @end
%%% Created : 24 Jun 2016 by Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%%-------------------------------------------------------------------
-module(region_getter_worker).

-behaviour(gen_server).

%% API
-export([
         start_link/0,
         get_regions/0,
         get_regions_json/0
        ]).

%% gen_server callbacks
-export([init/1, handle_call/3, handle_cast/2, handle_info/2,
         terminate/2, code_change/3]).


-define(SERVER, ?MODULE).

-record(state, {
          regions_json = <<>> :: binary(),
          regions = [] :: list(binary()),
          cached_at :: erlang:timestamp()
         }).

%%%===================================================================
%%% API
%%%===================================================================
start_link() ->
  gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).


get_regions() ->
  gen_server:call(?MODULE, get_regions).

get_regions_json() ->
  gen_server:call(?MODULE, get_regions_json).

%%%===================================================================
%%% gen_server callbacks
%%%===================================================================
init([]) ->
  io:format("Starting region getter~n"),
  accounts_sup:start_account(<<"dev">>),
  timer:send_interval(timer:hours(24), get_regions_from_aws),
  PrivDir = code:priv_dir(region_app),
  RegionFile = filename:join([PrivDir, "regions.txt"]),
  ok = filelib:ensure_dir(RegionFile),
  case file:consult(RegionFile) of
    {ok, [RegionsBin]} ->
      self() ! {new_regions, RegionsBin};
    _ ->
      self() ! get_regions_from_aws
  end,
  {ok, #state{}}.

handle_call(get_regions, _From, State = #state{regions = Regions}) ->
  {reply, {ok, Regions}, State};

handle_call(get_regions_json, _From, State = #state{regions_json = Json,
                                                   cached_at = CachedAt}) ->
  {reply, {ok, Json, CachedAt}, State}.

handle_cast(not_implemented, State) ->
  {noreply, State}.


handle_info(get_regions_from_aws, State) ->
  Self = self(),
  _Pid = spawn_link(fun() -> get_regions_from_aws(Self)
                   end),
  {noreply, State};

handle_info({new_regions, RegionsJson}, State = #state{regions = OldRegions}) ->
  %% Is the new list the same as the old list?
  %% Start any region_sups we need for any new regions
  NewRegions = get_regions_from_json(RegionsJson),

  {AddedRegions, DeletedRegions} = diff_region_lists(OldRegions, NewRegions),
  Credentials = #{role_access_key_id => "",
                  role_secret_access_key => "",
                  role_session_token => ""},
  lists:foreach(fun(Region) -> {ok, _} = regions_sup:start_region(<<"dev">>, Region, Credentials) end, AddedRegions),
  lists:foreach(fun(Region) -> _ = regions_sup:stop_region(<<"dev">>, Region) end, DeletedRegions),
  ok = cache_regions(RegionsJson),
  {noreply, State#state{regions = NewRegions,
                        regions_json = RegionsJson,
                        cached_at = os:timestamp()}}.


terminate(_Reason, _State) ->
  ok.


code_change(_OldVsn, State, _Extra) ->
  {ok, State}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
diff_region_lists(Old, New) ->
  %% Alternatively we could order the sets and walk them together...
  OldSet = sets:from_list(Old),
  NewSet = sets:from_list(New),
  Added = sets:to_list(sets:subtract(NewSet, OldSet)),
  Removed = sets:to_list(sets:subtract(OldSet, NewSet)),
  {Added, Removed}.


get_regions_from_aws(ParentPid) ->
  case os_cmd_helper:os_cmd("aws", ["ec2", "describe-regions"], [find_executable, flatten]) of
    {ok, Json} ->   ParentPid ! {new_regions, list_to_binary(Json)};
    Other ->
      io:format(user, "Got bad data back - retrying~n~p~n", [Other]),
      timer:send_after(timer:seconds(10), ParentPid, refresh_data)
  end,
  ok.



cache_regions(Regions) ->
  PrivDir = code:priv_dir(region_app),
  RegionFileName = filename:join([PrivDir, "regions.txt"]),
  ToWrite = io_lib:format("~tp.~n", [Regions]),
  ok = file:write_file(RegionFileName, ToWrite).

get_regions_from_json(Json) ->
  RegionsMap = jsx:decode(Json, [return_maps]),
  get_region_names(RegionsMap).

get_region_names(RegionsMap) ->
  lists:map(fun get_region_name/1, (maps:get(<<"Regions">>, RegionsMap))).

get_region_name(RegionMap) ->
  maps:get(<<"RegionName">>, RegionMap).
