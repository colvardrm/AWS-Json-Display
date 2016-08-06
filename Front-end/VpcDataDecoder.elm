module VpcDataDecoder exposing (..)

import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Json.Decode as Json exposing (..)
import Date
import Decode_Utils


type alias VpcData =
    { accounts : List Account
    }


type alias Account =
    { account : String
    , regions : List Region
    }


type alias Region =
    { region_name : String
    , vpcs : List Vpc
    }


type alias Vpc =
    { vpc_id : String
    , name : String
    , region : String
    , account : String
    , current_servers : List Instance
    , total_num_servers : Int
    , first_seen : String
    , first_seen_with_servers : String
    , last_seen : String
    , last_seen_with_servers : String
    }


decodeReceived : String -> Result String VpcData
decodeReceived json =
    Json.decodeString decodeVpcData json


decodeVpcData : Decoder VpcData
decodeVpcData =
    decode VpcData
        |> required "accounts" (Json.list decodeAccount)


decodeAccount : Decoder Account
decodeAccount =
    decode Account
        |> required "account" string
        |> required "regions" (Json.list decodeRegion)


decodeRegion : Decoder Region
decodeRegion =
    decode Region
        |> required "region_name" string
        |> required "vpcs" (Json.list decodeVpc)


decodeVpc : Decoder Vpc
decodeVpc =
    decode Vpc
        |> required "vpc_id" string
        |> required "vpc_name" string
        |> required "region" string
        |> required "account" string
        |> required "current_servers" (Json.list decodeInstance)
        |> required "total_num_servers" int
        |> required "first_seen" string
        |> required "first_seen_with_servers" string
        |> required "last_seen" string
        |> required "last_seen_with_servers" string


type alias Instance =
    { instance_id : String
    }


decodeInstance : Decoder Instance
decodeInstance =
    decode Instance
        |> required "instance_id" string
