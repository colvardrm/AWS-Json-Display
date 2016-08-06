-module(vpc_tracker).
-include("../include/aws_info.hrl").
-behaviour(gen_server).

%% API
-export([
         start_link/0,
         get_json/0
        ]).

%% gen_server callbacks
-export([init/1, handle_call/3, handle_cast/2, handle_info/2,
         terminate/2, code_change/3]).

-define(SERVER, ?MODULE).



-type vpc_id() :: binary().
-type region_id() :: binary().
-type account_id() :: binary().

-record(vpc_details, {
          name :: binary(),
          account :: binary(),
          current_servers :: lists:list(string()),
          total_num_servers :: integer(),
          first_seen :: erlang:datetime(),
          last_seen :: erlang:datetime(),
          first_seen_with_servers :: erlang:datetime(),
          last_seen_with_servers :: erlang:datetime()
         }).

-type vpc_details() :: #vpc_details{}.

-record(region_vpc_detail, {
          region_id :: binary(),
          vpc_details :: lists:list(maps:map(vpc_id(), vpc_details()))
         }).

-type vpc_name() :: binary().
-type region_vpc_detail() :: #region_vpc_detail{}.


-record(state, {
          region_to_vpcs               = maps:new() :: map(region_id(), lists:list(vpc_id())),
          account_to_region_vpc_detail = maps:new() :: map(account_id(), region_vpc_detail()),
          vpc_to_vpc_name = maps:new() :: map(vpc_id(), vpc_name()),
          json = <<>> :: binary()
         }).

%%%===================================================================
%%% API
%%%===================================================================
start_link() ->
  gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

get_json() ->
  gen_server:call(?MODULE, get_json).

%%%===================================================================
%%% gen_server callbacks
%%%===================================================================
init([]) ->

  ?SUBSCRIBE_INFO_BUS_MSGS(),
  PrivDir = code:priv_dir(region_app),
  VpcFileName = filename:join([PrivDir, "vpcs.txt"]),
  ok = filelib:ensure_dir(VpcFileName),
  InitialState = case file:consult(VpcFileName) of
                   {ok, [RegionToVpcsDetail, RegionToVpcs, VpcToVpcName]} ->
                     Json = jsx:encode(make_json_map(RegionToVpcsDetail, VpcToVpcName)),
                     #state{region_to_vpcs = RegionToVpcs,
                            account_to_region_vpc_detail = RegionToVpcsDetail,
                            vpc_to_vpc_name = VpcToVpcName,
                            json = Json
                           };
                   _ ->
                     #state{}
                 end,
  {ok, InitialState}.



handle_call(get_json, _From, State = #state{json = Json}) ->
  {reply, {ok, Json}, State}.

handle_cast(not_implemented, State) ->
  {noreply, State}.

 %% handle_info({read_cache, RegionToVpcsDetail}, State) ->
 %%   {noreply, State#state{region_to_vpcs_detail = RegionToVpcsDetail,
 %%                         json = jsx:encode(make_json_map(RegionToVpcsDetail))
 %%                        }};

handle_info(#aws_info_bus_msg{type = vpc,
                              json = Json,
                              region = Region},
            State = #state{region_to_vpcs = RegionToVpcs,
                           vpc_to_vpc_name = VpcToNames}) ->
  DecodedMap = jsx:decode(Json, [return_maps]),
  {ok, NewRegionToVpcs} = update_vpc_region_map(DecodedMap, RegionToVpcs, Region),
  {ok, NewVpcToNames} = update_vpc_to_names_map(DecodedMap, VpcToNames),
  {noreply, State#state{region_to_vpcs = NewRegionToVpcs,
                       vpc_to_vpc_name = NewVpcToNames}};

handle_info(#aws_info_bus_msg{type = instance,
                              json = Json,
                              region = Region,
                              account = Account},
            State = #state{region_to_vpcs = RegionToVpcs,
                           account_to_region_vpc_detail = DetailsMap,
                           vpc_to_vpc_name = VpcToVpcName}) ->

  Instances = get_instances(Json),
  VpcInstanceTuples = get_instance_vpc_tuples(Instances),
  NewDetailMap = make_vpc_map(VpcInstanceTuples, RegionToVpcs, DetailsMap, Region, Account),
  MsgJson = jsx:encode(make_json_map(NewDetailMap, VpcToVpcName)),
  %% io:format("~p~n", [MsgJson]),
  ok = cache_vpcs(NewDetailMap, RegionToVpcs, VpcToVpcName),
  ?RAISE_AGGREGATE_BUS_MSG(#aws_vpc_aggregate_bus_msg{
                      json = MsgJson}),
  {noreply, State#state{account_to_region_vpc_detail = NewDetailMap}};

handle_info(#aws_info_bus_msg{}, State) ->
  {noreply, State}.

terminate(_Reason, _State) ->
  ok.

code_change(_OldVsn, State, _Extra) ->
  {ok, State}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
update_vpc_to_names_map(VpcMap, OldVpcToNames) ->
  Payload = maps:get(<<"Payload">>, VpcMap),
  Vpcs = maps:get(<<"Vpcs">>, Payload),
  VpcNameTuples = lists:map( fun(Vpc) -> make_vpc_name_tuple(Vpc) end, Vpcs),
  NewMap = maps:from_list(VpcNameTuples),
  MergedMap = maps:merge(OldVpcToNames, NewMap),
  {ok, MergedMap}.

make_vpc_name_tuple(Vpc) ->
  {maps:get(<<"VpcId">>, Vpc), get_name_from_vpc(Vpc)}.

get_name_from_vpc(Vpc) ->
  list_to_binary(string:join(lists:map(fun(Tag) -> get_name_from_tag(Tag) end, maps:get(<<"Tags">>, Vpc, [])), "")).

get_name_from_tag(Tag) ->
  case maps:get(<<"Key">>, Tag, "") of
    <<"Name">> ->
      Value = maps:get(<<"Value">>, Tag),
      binary_to_list(Value);
    _ ->
      ""
  end.

make_json_map(AccountToRegionVpcDetail, VpcToVpcName) ->
  Accounts = maps:keys(AccountToRegionVpcDetail),
  AccountMaps = lists:map(fun(Account) -> make_json_entry(AccountToRegionVpcDetail, VpcToVpcName, Account) end, Accounts),
  maps:put(accounts, AccountMaps, #{}).


make_json_entry(AccountToRegionVpcDetail, VpcToVpcName, Account) ->
  RegionToVpcDetailMap = maps:get(Account, AccountToRegionVpcDetail),
  RegionList = maps:keys(RegionToVpcDetailMap),
  RegionMaps = lists:map(fun(Region) -> make_region_json_entry(Region, RegionToVpcDetailMap, VpcToVpcName) end, RegionList),
  AccountMap = maps:put(account, Account, #{}),
  maps:put(regions, RegionMaps, AccountMap).



make_region_json_entry(Region, RegionToVpcDetailMap, VpcToVpcName) ->
  VpcIdToVpcDetailMap = maps:get(Region, RegionToVpcDetailMap, #{}),
  VpcIdList = maps:keys(VpcIdToVpcDetailMap),
  VpcIdMaps = lists:map(fun(VpcId) -> make_json_sub_entry(VpcIdToVpcDetailMap, VpcToVpcName, VpcId) end, VpcIdList),
  BaseMap = maps:put(region_name, Region, #{}),
  maps:put(vpcs, VpcIdMaps, BaseMap).


make_json_sub_entry(VpcMap, VpcToVpcName, VpcId) ->
  SubMap = maps:get(VpcId, VpcMap),
  NewMap = maps:put(vpc_id, VpcId, SubMap),
  maps:put(vpc_name, maps:get(VpcId, VpcToVpcName, ""), NewMap).



cache_vpcs(RegionToVpcDetail, RegionToVpc, VpcToVpcName) ->
  PrivDir = code:priv_dir(region_app),
  VpcFileName = filename:join([PrivDir,"vpcs.txt"]),
  ToWrite = io_lib:format("~tp.~n~tp.~n~tp.", [RegionToVpcDetail, RegionToVpc, VpcToVpcName]),
  ok = file:write_file(VpcFileName, ToWrite).


update_vpc_region_map(VpcMap, VpcRegionMap, Region) ->
  Payload = maps:get(<<"Payload">>, VpcMap),
  Vpcs = maps:get(<<"Vpcs">>, Payload),
  VpcIds = lists:map(fun(Vpc) -> maps:get(<<"VpcId">>, Vpc) end, Vpcs),
  NewVpcRegionMap = maps:put(Region, VpcIds, VpcRegionMap),
  {ok, NewVpcRegionMap}.


make_vpc_map(VpcInstanceTupleList, RegionToVpcs, DetailsMap, Region, Account) ->
  RegionToVpcDetailMap = maps:get(Account, DetailsMap, #{}),
  NewRegionToVpcDetailMap = make_region_vpc_map(RegionToVpcDetailMap, Account, Region, VpcInstanceTupleList, RegionToVpcs),
  NewAccountMap = maps:put(Account, NewRegionToVpcDetailMap, #{}),
  MergedAccountMap = maps:merge(maps:get(Account, DetailsMap, #{}), maps:get(Account, NewAccountMap, #{})),
  maps:put(Account, MergedAccountMap, DetailsMap).


make_region_vpc_map(RegionToVpcMap, Account, Region, VpcInstanceTupleList, RegionToVpcs) ->
  VpcMap = maps:get(Region, RegionToVpcMap, #{}),
  VpcIds = maps:get(Region, RegionToVpcs, []),
  VpcIdToVpcDetailsTuplesList = lists:map(fun(VpcId) -> make_vpc_server_map(VpcId, VpcInstanceTupleList, VpcMap, Account, Region) end, VpcIds),
  VpcIdToVpcDetails = maps:from_list(VpcIdToVpcDetailsTuplesList),
  maps:put(Region, VpcIdToVpcDetails, #{}).


make_vpc_server_map(VpcId, InstanceVpcTupleList, OldVpcServerMap, Account, Region) ->
  Now = calendar:universal_time(),
  VpcMap = maps:get(VpcId, OldVpcServerMap, #{}),
  FirstSeen = maps:get(first_seen, VpcMap, Now),
  InstanceVpcList = lists:flatmap(fun(InstanceVpcTuple) -> check_vpc_tuple(VpcId, InstanceVpcTuple) end, InstanceVpcTupleList),
  FirstSeenWithServersTest = maps:get(first_seen_with_servers, VpcMap, not_seen),
  FirstSeenWithServers = case FirstSeenWithServersTest of
                           not_seen ->
                             case length(InstanceVpcList) of
                               0 -> not_seen;
                               _ -> Now
                             end;
                           _ ->
                             FirstSeenWithServersTest
                         end,
  LastSeenWithServers = case length(InstanceVpcList) of
                          0 ->
                            maps:get(last_seen_with_servers, VpcMap, not_seen);
                          _ ->
                            Now
                        end,
  OldTotalServers = maps:get(total_num_servers, VpcMap, 0),
  NewTotalServers = sets:size(sets:subtract(sets:from_list(InstanceVpcList), sets:intersection(sets:from_list(maps:get(current_servers, VpcMap, [])), sets:from_list(InstanceVpcList)))) + OldTotalServers,
  {VpcId, #{current_servers => InstanceVpcList,
            region => Region,
            total_num_servers => NewTotalServers,
            first_seen => FirstSeen,
            first_seen_with_servers => FirstSeenWithServers,
            last_seen => Now,
            last_seen_with_servers => LastSeenWithServers,
            account => Account}}.



check_vpc_tuple(VpcId, InstanceVpcTuple) ->
  {InstanceVpcId, InstanceId} = InstanceVpcTuple,
  case InstanceVpcId of
    VpcId ->
      [#{<<"instance_id">> => InstanceId}];
    _ ->
      []
  end.


get_instances(Json) ->
  ReservationsMap = jsx:decode(Json, [return_maps]),
  Payload = maps:get(<<"Payload">>, ReservationsMap),
  Reservations = maps:get(<<"Reservations">>, Payload),
  lists:flatmap(fun(Reservation) -> maps:get(<<"Instances">>, Reservation) end, Reservations).



get_instance_vpc_tuples(Instances) ->
  lists:map(fun(Instance) -> make_instance_vpc_tuple(Instance) end, Instances).


make_instance_vpc_tuple(Instance) ->
  {maps:get(<<"VpcId">>, Instance, <<"undefined">>), maps:get(<<"InstanceId">>, Instance)}.
