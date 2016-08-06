-module(app_sup).
-behaviour(supervisor).
-export([start_link/0]).
-export([init/1]).


%%------------------------------------------------------------------------------
%% API
%%------------------------------------------------------------------------------
start_link() ->
  supervisor:start_link({local, ?MODULE}, ?MODULE, []).

%%------------------------------------------------------------------------------
%% Supervisor callbacks
%%------------------------------------------------------------------------------
init([]) ->
  io:format(user, "Here comes app sup ~n", []),
  SupFlags = {one_for_one, 5, 10},
  ChildSpecs = [{accounts_sup,
                 {accounts_sup, start_link, []},
                 transient,
                 1000,
                 supervisor,
                 [account_sup]},

                {accounts_tracker,
                 {accounts_tracker, start_link, []},
                 transient,
                 1000,
                 worker,
                 [accounts_tracker]},

                {user_tracker,
                 {user_tracker, start_link, []},
                 transient,
                 1000,
                 worker,
                 [user_tracker]},

                {vpc_tracker,
                 {vpc_tracker, start_link, []},
                 transient,
                 1000,
                 worker,
                 [vpc_tracker]},

                {region_getter,
                 {region_getter_worker, start_link, []},
                 transient,
                 1000,
                 worker,
                 [region_getter_worker]}],

  {ok, {SupFlags, ChildSpecs}}.
