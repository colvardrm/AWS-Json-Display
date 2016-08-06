-module(ws_handler).
-behaviour(cowboy_websocket_handler).

-include("../../include/aws_info.hrl").

-export([init/3]).
-export([websocket_init/3]).
-export([websocket_handle/3]).
-export([websocket_info/3]).
-export([websocket_terminate/3]).


init({tcp, http}, _Req, _Opts) ->
  %% io:format(user, "W2S Init ~p~n", [self()]),
  {upgrade, protocol, cowboy_websocket}.

websocket_init(_TransportName, Req, _Opts) ->
  self() ! send_initial_data,
  ?SUBSCRIBE_INFO_BUS_MSGS(),
  ?SUBSCRIBE_AGGREGATE_BUS_MSGS(),
  ?SUBSCRIBE_ACCOUNT_BUS_MSGS(),
  {ok, Req, undefined_state}.

websocket_handle({text, Msg}, Req, State) ->
  [Account, Type, Region, ResourceId] = string:tokens(binary_to_list(Msg), " "),
  case Type of
    "volume" ->
      region_worker:remove_volume(Account, Region, ResourceId);
    "vpc" ->
      region_worker:remove_vpc(Account, Region, ResourceId)
  end,
%%  io:format(user, "Text message ~p~n", [VolumeBinary]),
  {reply, {text, << Msg/binary >>}, Req, State};

websocket_handle(_Data, Req, State) ->
%%  io:format(user, "Other message ~p~n", [_Data]),
  {ok, Req, State}.

websocket_info(send_initial_data, Req, State) ->
  Instances = region_worker:get_all_regions_data(<<"dev">>, instance),
  Volumes = region_worker:get_all_regions_data(<<"dev">>, volume),
  Vpcs = region_worker:get_all_regions_data(<<"dev">>, vpc),

  {ok, VpcData} = vpc_tracker:get_json(),
  {ok, AccountsJson} = accounts_tracker:get_accounts_json(),
  {ok, UserJson} = user_tracker:get_users_json(),
  InstanceResp = lists:map(fun(Json) -> {text, Json} end, Instances),
  VolumeResp = lists:map(fun(Json) -> {text, Json} end, Volumes),
  VpcResp = lists:map(fun(Json) -> {text, Json} end, Vpcs),
  {reply, lists:append([InstanceResp, VolumeResp, VpcResp, [{text, VpcData}, {text, AccountsJson}, {text, UserJson}]])
          , Req, State};


websocket_info(BusMsg = #aws_info_bus_msg{json = Json}, Req, State) ->
%%  io:format(user, "Bus message ~p~n", [Json]),
  {reply, {text, Json}, Req, State};

websocket_info(BusMsg = #aws_vpc_aggregate_bus_msg{json = Json}, Req, State) ->
  {reply, {text, Json}, Req, State};

websocket_info(BusMsg = #aws_account_bus_msg{accounts_json = AccountsJson}, Req, State) ->
  {reply, {text, AccountsJson}, Req, State};

websocket_info(_Info, Req, State) ->
  io:format(user, "Info message ~p~n", [_Info]),
  {ok, Req, State}.

websocket_terminate(_Reason, _Req, _State) ->
  ok.
