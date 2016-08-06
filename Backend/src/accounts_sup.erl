-module(accounts_sup).
-behaviour(supervisor).

-export([start_link/0,
         start_account/1,
         stop_account/1
        ]).

-export([init/1]).

%%%-----------------------------------------------------------------------------
%%% API
%%%-----------------------------------------------------------------------------
start_link() ->
  Resp = supervisor:start_link({local, ?MODULE}, ?MODULE, []),
  io:format(user, "Resp was ~p~n", [Resp]),
  Resp.

start_account(Account) ->
  io:format(user, "Starting account: ~p~n", [Account]),
  accounts_tracker:add_account(Account),
  supervisor:start_child(?MODULE, [Account]).

stop_account(Account) ->
  ChildPid = account_sup:pid_of(Account),
  accounts_tracker:remove_account(Account),
  supervisor:terminate_child(?MODULE, ChildPid).



%%%-----------------------------------------------------------------------------
%%% Supervisor callbacks
%%%-----------------------------------------------------------------------------
init([]) ->
  SupFlags = {simple_one_for_one, 5, 10},
  ChildSpec = [{account_sup,
                {account_sup, start_link, []},
                transient,
                1000,
                supervisor,
                [account_sup]}],
  {ok, {SupFlags, ChildSpec}}.
