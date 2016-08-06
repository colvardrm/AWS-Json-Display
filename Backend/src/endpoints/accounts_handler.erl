%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(accounts_handler).

-export([init/3, content_types_provided/2, content_types_accepted/2, allowed_methods/2, terminate/3, respond/2]).
-export([from_json/2]).

init(_Transport, _Req, []) ->
  {upgrade, protocol, cowboy_rest}.


allowed_methods(Req, State) ->
  {[<<"POST">>], Req, State}.

content_types_provided(Req, State) ->
  {[
    {<<"text/plain">>, respond}
   ], Req, State}.

respond(Req, State) ->
  {<<"Default response">>, Req, State}.

content_types_accepted(Req, State) ->
  Req1 = cowboy_req:set_resp_header(<<"access-control-allow-methods">>, <<"POST">>, Req),
  Req2 = cowboy_req:set_resp_header(<<"access-control-allow-origin">>, <<"*">>, Req1),
  {[{'*', from_json}], Req2, State}.

from_json(Req, State) ->
  {ok, Body, _} = cowboy_req:body(Req),
  DecodedMap = jsx:decode(Body, [return_maps]),
  {ok, User, AccountBinary, AccessKey, SecretKey, MFA} = get_json_data(DecodedMap),
  RespBody = case run_script_with_arguments(User, AccountBinary, AccessKey, SecretKey, MFA) of
               {ok, Message} -> case Message of
                                  "  " ->
                                    jsx:encode(#{ <<"Response">> => <<"Unable to create account. Account details invalid">>});
                                  _ ->
                                    [RoleAccessKeyId, RoleSecretAccessKey, RoleSessionToken] =
                                      string:tokens(Message, " "),

                                    Credentials = #{role_access_key_id => RoleAccessKeyId,
                                                    role_secret_access_key => RoleSecretAccessKey,
                                                    role_session_token => RoleSessionToken},
                                    accounts_sup:start_account(AccountBinary),
                                    {ok, Regions}  = region_getter_worker:get_regions(),
                                    lists:foreach(fun(Region) -> {ok, _} = regions_sup:start_region(AccountBinary, Region, Credentials) end, Regions),
                                    jsx:encode(#{ <<"Response">> => <<"Received account data successfully">> })
                                end;

               {_, _, Other} ->
                 io:format(user, "Failed to add account: ~p~n", [Other]),
                 jsx:encode(#{ <<"Response">> => list_to_binary(Other)})
  end,

  Req2 = cowboy_req:set_resp_body(RespBody, Req),
  {true, Req2, State}.

get_json_data(DecodedMap) ->
  User = binary_to_list(maps:get(<<"user">>, DecodedMap)),
  AccountBinary = maps:get(<<"name">>, DecodedMap),
  AccessKey = binary_to_list(maps:get(<<"access_key">>, DecodedMap)),
  SecretKey = binary_to_list(maps:get(<<"secret">>, DecodedMap)),
  MFA = binary_to_list(maps:get(<<"mfa">>, DecodedMap)),
  {ok, User, AccountBinary, AccessKey, SecretKey, MFA}.


temp_file(Root) ->

  {A,B,C} = now(),
  N = node(),
  lists:flatten(io_lib:format("~p~p-~p.~p.~p.tmp",[Root, N,A,B,C])).


run_script_with_arguments(User, AccountBinary, AccessKey, SecretKey, MFA) ->

  TempFile = temp_file("credentials"),

  PrivDir = code:priv_dir(region_app),
  ScriptFileName = filename:join([PrivDir, "scripts", "add_account.sh"]),
  Args = [User, binary_to_list(AccountBinary), AccessKey, SecretKey, MFA, TempFile],
  Resp = case os_cmd_helper:os_cmd(ScriptFileName, Args, [find_executable, flatten]) of
           {ok, _} ->
             case file:read_file(TempFile) of
               {ok, Data} ->  {ok, binary_to_list(Data)};
               _ -> {error, no_file, TempFile}
             end;
           Other -> Other
         end,
  _ = file:delete(TempFile),
  Resp.


terminate(_Reason, _Req, _State) ->
  ok.
