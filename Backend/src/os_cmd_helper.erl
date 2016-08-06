-module(os_cmd_helper).

-export([os_cmd/1,
         os_cmd/2,
         os_cmd/3]).

%%------------------------------------------------------------------------------
%% API
%%------------------------------------------------------------------------------
os_cmd(Cmd) ->
  os_cmd(Cmd, []).

os_cmd(Cmd, Args) ->
  Tag = make_ref(),

  {Pid, Mref} = erlang:spawn_monitor(os_cmd_fun(Cmd, Args, Tag)),

  receive
    {'DOWN', Mref, _, Pid, {Tag, Result}} ->
      Result;
    {'DOWN', Mref, _, Pid, Reason} ->
      exit(Reason)
  end.

-spec os_cmd_fun(any(), any(), any()) -> fun(() -> no_return()).
os_cmd_fun(Cmd, Args, Tag) ->
  fun() ->
      process_flag(trap_exit, true),

      Port = erlang:open_port({spawn_executable, Cmd}, [{args, Args}, {line, 255}, exit_status, stderr_to_stdout]),

      exit({Tag, os_cmd_loop(Port, [])})
  end.

os_cmd(Cmd, Args, Options) ->
  FullPath = case lists:member(find_executable, Options) of
               true -> os:find_executable(Cmd);
               false -> Cmd
             end,

  InitialResponse = os_cmd(FullPath, Args),

  case lists:member(flatten, Options) of
    true ->
      case InitialResponse of
        {ok, Response} -> {ok, flatten_response(Response)};
        {error, Reason, Response} -> {error, Reason, flatten_response(Response)}
      end;
    _ -> InitialResponse
  end.

%%------------------------------------------------------------------------------
%% Internal functions
%%------------------------------------------------------------------------------
flatten_response(Response) ->
  lists:flatten(unpack_response(Response)).

unpack_response([]) ->
  [];
unpack_response([{eol, String} | T]) ->
  [String ++ "\n" | unpack_response(T)].

os_cmd_loop(Port, Output) ->
  receive
    {Port, {data, Data}} ->
      os_cmd_loop(Port, [Data | Output]);

    {Port, {exit_status, 0}} ->
      {ok, lists:reverse(Output)};

    {Port, {exit_status, Status}} ->
      {error, Status, lists:reverse(Output)};

    {'EXIT', Port, Reason} ->
      {error, Reason, lists:reverse(Output)}
  end.
