%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(get_regions_api).

-export([init/3, content_types_provided/2, terminate/3]).
-export([get_regions/2]).

init(_Transport, _Req, []) ->
  {upgrade, protocol, cowboy_rest}.


content_types_provided(Req, State) ->
  {[
    {<<"text/plain">>, get_regions}
   ], Req, State}.

get_regions(Req, State) ->
  %%  {ok, Body} = get_region_names(app_sup:get_regions()),
  Req1 = cowboy_req:set_resp_header(<<"access-control-allow-methods">>, <<"GET">>, Req),
  Req2 = cowboy_req:set_resp_header(<<"access-control-allow-origin">>, <<"*">>, Req1),
  Resp = case region_getter_worker:get_regions_json() of
           {ok, Json, _} -> Json;
           {error, _, _} -> <<"error">>
         end,
  {Resp, Req2, State}.


terminate(_Reason, _Req, _State) ->
  ok.
