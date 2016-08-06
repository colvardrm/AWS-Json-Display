-module(region_sup).
-behaviour(supervisor).

-export([start_link/3,
         pid_of/2]).
-export([init/1]).

start_link(Account, Region, Credentials) ->
  Name = region_sup_name(Account, Region),
  io:format(user, "region_sup with name ~p starting~n", [Name]),

  supervisor:start_link({local, Name}, ?MODULE, [Account, Region, Credentials]).

init([Account, Region, Credentials]) ->
  SupFlags = {one_for_one, 5, 10},
  ChildSpecs = [{instance_worker,
                  {region_worker, start_link, [Account, Region, Credentials, instance]},
                  transient,
                  1000,
                  worker,
                  [region_worker]},
                {volume_worker,
                  {region_worker, start_link, [Account, Region, Credentials, volume]},
                  transient,
                  1000,
                  worker,
                  [region_worker]},
                {vpc_worker,
                  {region_worker, start_link, [Account, Region, Credentials, vpc]},
                  transient,
                  1000,
                  worker,
                 [region_worker]}],

  {ok, {SupFlags, ChildSpecs}}.


pid_of(Account, Region) ->
  whereis(region_sup_name(Account, Region)).

%%%===================================================================
%%% Internal functions
%%%===================================================================
region_sup_name(Account, Region) ->
  binary_to_atom(<<Account/binary, "_", Region/binary, "_sup">>, utf8).
