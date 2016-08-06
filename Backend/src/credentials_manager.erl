%%%-------------------------------------------------------------------
%%% @author Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%% @copyright (C) 2016, Cloud User
%%% @doc
%%%
%%% @end
%%% Created : 25 Jul 2016 by Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%%-------------------------------------------------------------------
-module(credentials_manager).
-include("../include/aws_info.hrl").
-behaviour(gen_server).

%% API
-export([start_link/0, get_credentials/1]).

%% gen_server callbacks
-export([init/1, handle_call/3, handle_cast/2, handle_info/2,
         terminate/2, code_change/3]).

-define(SERVER, ?MODULE).

-record(state, {}).

%%%===================================================================
%%% API
%%%===================================================================

start_link() ->
  gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).

get_credentials(Name) ->
  gen_server:call(?SERVER, {get_credentials, Name}).

set_credentials(Name, Credentials) ->
  gen_server:call(?SERVER, {set_credentials, Name, Credentials}).


%%%===================================================================
%%% gen_server callbacks
%%%===================================================================

init([]) ->
  ets:new(credentials_table, [set, named_table]),
  {ok, #state{}}.


handle_call({get_credentials, Name}, _From, State=#state{}) ->
  ets:lookup(credentials_table, Name),
  {reply, ok, State};

handle_call({set_credentials, Name, Credentials}, _From, State=#state{}) ->
  ets:insert(credentials_table, {Name, Credentials}),
  {reply, ok, State}.


handle_cast(not_implemented, State) ->
  {noreply, State}.


handle_info(not_implemented, State) ->
  {noreply, State}.


terminate(_Reason, _State) ->
  ok.


code_change(_OldVsn, State, _Extra) ->
  {ok, State}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
