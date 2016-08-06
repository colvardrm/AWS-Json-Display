-module(account_sup).
-behaviour(supervisor).
-export([
         start_link/1,
         pid_of/1
        ]).

-export([init/1]).

%%------------------------------------------------------------------------------
%% API
%%------------------------------------------------------------------------------
start_link(Account) ->
  io:format(user, "Account start_link ~p~n", [Account]),
  supervisor:start_link({local, account_sup_name(Account)}, ?MODULE, [Account]).

%%------------------------------------------------------------------------------
%% Supervisor callbacks
%%------------------------------------------------------------------------------
init([Account]) ->
  SupFlags = {one_for_one, 5, 10},
  ChildSpecs = [{regions_sup,
                 {regions_sup, start_link, [Account]},
                 transient,
                 1000,
                 supervisor,
                 [regions_sup]}],

  {ok, {SupFlags, ChildSpecs}}.


pid_of(Account) ->
  whereis(account_sup_name(Account)).

%%%===================================================================
%%% Internal functions
%%%===================================================================
account_sup_name(Account) ->
  binary_to_atom(<<Account/binary, "_sup">>, utf8).
