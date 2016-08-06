%%%-------------------------------------------------------------------
%%% @author Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%% @copyright (C) 2016, Cloud User
%%% @doc
%%%
%%% @end
%%% Created : 25 Jul 2016 by Cloud User <centos@ip-10-45-170-144.ec2.internal>
%%%-------------------------------------------------------------------
-module(accounts_tracker).
-include("../include/aws_info.hrl").
-behaviour(gen_server).

%% API
-export([start_link/0, get_account_names/0, add_account/1, remove_account/1, get_accounts_json/0]).

%% gen_server callbacks
-export([init/1, handle_call/3, handle_cast/2, handle_info/2,
         terminate/2, code_change/3]).

-define(SERVER, ?MODULE).

-record(state, {accounts = [] :: lists:list(binary()),
                accounts_json = <<>> :: binary()
               }).

%%%===================================================================
%%% API
%%%===================================================================

start_link() ->
  gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).

get_account_names() ->
  gen_server:call(?SERVER, get_account_names).

add_account(AccountName) ->
  gen_server:cast(?SERVER, {add_account, AccountName}).

remove_account(AccountName) ->
  gen_server:cast(?SERVER, {remove_account, AccountName}).

get_accounts_json() ->
  gen_server:call(?SERVER, get_accounts_json).


%%%===================================================================
%%% gen_server callbacks
%%%===================================================================

init([]) ->

  BaseAccounts = #{<<"example">> => false},

  Json = jsx:encode(make_json(BaseAccounts)),
  {ok, #state{accounts = BaseAccounts, accounts_json = Json}}.


handle_call(get_account_names, _From, State=#state{accounts = Accounts}) ->
  {reply, {ok, Accounts}, State};

handle_call(get_accounts_json, _From, State=#state{accounts_json = AccountsJson}) ->
  {reply, {ok, AccountsJson}, State}.


handle_cast({add_account, Account}, State=#state{accounts = Accounts}) ->
  NewAccounts = maps:put(Account, true, Accounts),
  NewAccountsJson = jsx:encode(make_json(NewAccounts)),
  ?RAISE_ACCOUNT_BUS_MSG(#aws_account_bus_msg{
                            accounts_json = NewAccountsJson
                            }),
  {noreply, State#state{accounts = NewAccounts, accounts_json = NewAccountsJson}};

handle_cast({remove_account, Account}, State=#state{accounts = Accounts}) ->
  NewAccounts = maps:remove(Account, Accounts),
  NewAccountsJson = jsx:encode(make_json(NewAccounts)),
  ?RAISE_ACCOUNT_BUS_MSG(#aws_account_bus_msg{
                            accounts_json = NewAccountsJson
                            }),
  {noreply, State#state{accounts = NewAccounts, accounts_json = NewAccountsJson}}.


handle_info(not_implemented, State) ->
  {noreply, State}.


terminate(_Reason, _State) ->
  ok.


code_change(_OldVsn, State, _Extra) ->
  {ok, State}.

%%%===================================================================
%%% Internal functions
%%%===================================================================
make_json(AccountsMap) ->
  AccountNames = maps:keys(AccountsMap),
  EntryList = lists:map(fun(AccountName) -> make_json_entry(AccountName, AccountsMap) end, AccountNames),
  maps:put(accounts, EntryList, #{}).

make_json_entry(AccountName, AccountsMap) ->
  IsActive = maps:get(AccountName, AccountsMap),
  #{account_name => AccountName, active => IsActive}.
