%%%-------------------------------------------------------------------
%%% @author Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%% @copyright (C) 2016, Cloud User
%%% @doc
%%%
%%% @end
%%% Created : 25 Jul 2016 by Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%%-------------------------------------------------------------------
-module(user_tracker).
-include("../include/aws_info.hrl").
-behaviour(gen_server).

%% API
-export([start_link/0, get_user_names/0, get_users_json/0]).

%% gen_server callbacks
-export([init/1, handle_call/3, handle_cast/2, handle_info/2,
         terminate/2, code_change/3]).

-define(SERVER, ?MODULE).

-record(state, {users = [] :: lists:list(binary()),
                users_json = <<>> :: binary()
               }).

%%%===================================================================
%%% API
%%%===================================================================

start_link() ->
  gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).

get_user_names() ->
  gen_server:call(?SERVER, get_user_names).

get_users_json() ->
  gen_server:call(?SERVER, get_users_json).


%%%===================================================================
%%% gen_server callbacks
%%%===================================================================

init([]) ->
  Users = [<<"user1">>, <<"user2">>, <<"user3">>, <<"user4">>],
  Json = jsx:encode(format_for_json(Users)),
  {ok, #state{users = Users, users_json = Json}}.


handle_call(get_user_names, _From, State=#state{users = Users}) ->
  {reply, {ok, Users}, State};

handle_call(get_users_json, _From, State=#state{users_json = UsersJson}) ->
  {reply, {ok, UsersJson}, State}.

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
format_for_json(UserNames) ->
  UserEntries = lists:map(fun(UserName) -> #{user_name => UserName} end, UserNames),
  maps:put(users, UserEntries, #{}).
