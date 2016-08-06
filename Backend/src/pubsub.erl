-module(pubsub).

-export([register_listener/2,
         register_listener/3,
         deregister_listener/1,
         publish/2]).

%%%===================================================================
%%% API
%%%===================================================================

publish(BusName, Msg) ->
  %% "Publishing" is sending a message to all processes that have registered a given property
  _ = gproc:send({p, l, BusName}, Msg),
  ok.

register_listener(BusName, Pid) when is_pid(Pid) ->
  register_listener(BusName, Pid, _FilterFun = undefined).

register_listener(BusName, Pid, []) when is_pid(Pid) ->
  register_listener(BusName, Pid, _FilterFun = undefined);

register_listener(BusName, Pid, MessageTypes) when is_pid(Pid),
                                                   is_list(MessageTypes) ->

  TypeAtoms = [element(1,Record) || Record <- MessageTypes],

  FilterFun = fun(Message) ->
                  MsgType = element(1, Message),
                  lists:member(MsgType, TypeAtoms)
              end,

  register_listener(BusName, Pid, FilterFun);

register_listener(BusName, Pid, MessageFilterFun) when is_pid(Pid) ->

  SubscriberName = case erlang:process_info(Pid, registered_name) of
                     [] -> Pid;
                     {registered_name, RegisteredName} -> RegisteredName
                   end,

  %% ?INFO("Process ~p registering for ~p", [SubscriberName, BusName]),

  ListenerPid = spawn_link(fun() ->
                               gproc:reg({p, l, BusName}),
                               gproc_listener(SubscriberName, BusName, Pid, MessageFilterFun)
                           end),
  {ok, ListenerPid}.

deregister_listener(RegistrationToken) ->
  RegistrationToken ! stop,
  ok.

%%%===================================================================
%%% Internal functions
%%%===================================================================
gproc_listener(SubscriberName, BusName, Pid, undefined) ->
  receive
    stop ->
	    gproc:unreg({p, l, BusName}),
	    exit(normal);

    Msg ->
	    %%?INFO("Global message for process '~p' on bus ~p:~p", [SubscriberName, BusName, element(1, Msg)]),
	    Pid ! Msg

  end,
  gproc_listener(SubscriberName, BusName, Pid, undefined);

gproc_listener(SubscriberName, BusName, Pid, MessageFilterFun) ->
  receive
    stop ->
	    gproc:unreg({p, l, BusName}),
	    exit(normal);

    Msg ->
	    case MessageFilterFun(Msg) of
        true ->
          %%?INFO("Registered message for process '~p' on bus ~p:~p", [SubscriberName, BusName, element(1, Msg)]),
          Pid ! Msg,
          ok;
        _ ->
          ok
	    end

  end,
  gproc_listener(SubscriberName, BusName, Pid, MessageFilterFun).

%%%===================================================================
%%% Tests
%%%===================================================================
-ifdef(NO_TEST).
-include_lib("eunit/include/eunit.hrl").
-include("shared/include/test.hrl").
-compile(export_all).

-endif.
