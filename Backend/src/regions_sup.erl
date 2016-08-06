-module(regions_sup).
-behaviour(supervisor).

-export([start_link/1,
         start_region/3,
         stop_region/2
        ]).

-export([init/1]).

%%%-----------------------------------------------------------------------------
%%% API
%%%-----------------------------------------------------------------------------
start_link(Account) ->
  io:format(user, "regions_sup for account: ~p~n", [Account]),
  supervisor:start_link({local, sup_name(Account)}, ?MODULE, [Account]).

start_region(Account, Region, Credentials) ->
  io:format(user, "Starting ~p/~p~n", [Account, Region]),
  supervisor:start_child(sup_name(Account), [Account, Region, Credentials]).

stop_region(Account, Region) ->
  ChildPid = region_sup:pid_of(Account, Region),
  supervisor:terminate_child(sup_name(Account), ChildPid).


%%%-----------------------------------------------------------------------------
%%% Supervisor callbacks
%%%-----------------------------------------------------------------------------
init([_Account]) ->
  io:format(user, "regions_sup init for account: ~p~n", [_Account]),
  SupFlags = {simple_one_for_one, 5, 10},
  ChildSpec = [{region_sup,
               {region_sup, start_link, []},
               transient,
               1000,
               supervisor,
               [region_sup]}],
  {ok, {SupFlags, ChildSpec}}.


sup_name(Account) ->
  binary_to_atom(<<Account/binary, "_regions_sup">>, utf8).
