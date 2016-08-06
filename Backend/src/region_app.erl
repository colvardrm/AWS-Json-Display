-module(region_app).
-behaviour(application).
-export([start/2, stop/1]).

start(_Type, _Args) ->

  Dispatch = cowboy_router:compile([
                                     {'_', [
                                            {"/api/regions/data", ws_handler, []},
                                            {"/api/regions", get_regions_api, []},
                                            {"/api/accounts", accounts_handler, []}
                                            %%{"/static/[...]", cowboy_static, {priv_dir, websocket, "static"}}
                                           ]}
                                     ]),
  {ok, _} = cowboy:start_http(my_http_listener, 100, [{port, 8080}],
                              [{env, [{dispatch, Dispatch}]}]
                             ),

  {ok, _} = app_sup:start_link().


stop(_) ->
  ok.
