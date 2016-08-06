-ifndef(__aws_info_bus_hrl__).
-define(__aws_info_bus_hrl__, 1).

-define (RAISE_INFO_BUS_MSG(Message),
         ok = pubsub:publish(aws_info, Message)).

-define (SUBSCRIBE_INFO_BUS_MSGS(),
         {ok, _} = pubsub:register_listener(aws_info, self()),
         ok).

-define (SUBSCRIBE_INFO_BUS_MSGS(Types),
         {ok, _} = pubsub:register_listener(aws_info, self(), Types),
         ok).


-define (RAISE_AGGREGATE_BUS_MSG(Message),
         ok = pubsub:publish(aws_aggregate, Message)).

-define (SUBSCRIBE_AGGREGATE_BUS_MSGS(),
         {ok, _} = pubsub:register_listener(aws_aggregate, self()),
         ok).

-define (SUBSCRIBE_AGGREGATE_BUS_MSGS(Types),
         {ok, _} = pubsub:register_listener(aws_aggregate, self(), Types),
         ok).


-define (RAISE_ACCOUNT_BUS_MSG(Message),
         ok = pubsub:publish(aws_account, Message)).

-define (SUBSCRIBE_ACCOUNT_BUS_MSGS(),
         {ok, _} = pubsub:register_listener(aws_account, self()),
         ok).


-define (SUBSCRIBE_ACCOUNT_BUS_MSGS(Types),
         {ok, _} = pubsub:register_listener(aws_account, self(), Types),
         ok).



-record(aws_info_bus_msg, {
          region :: binary(),
          type :: atom(),
          json :: binary(),
          account :: binary()
         }).


-record(aws_vpc_aggregate_bus_msg, {
          json :: binary(),
          account :: binary()
         }).

-record(aws_account_bus_msg, {
          accounts_json :: binary()
         }).



-endif.
