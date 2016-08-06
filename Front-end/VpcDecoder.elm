module VpcDecoder exposing (..)

import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Json.Decode as Json exposing (..)
import Date
import Decode_Utils


type alias RegVpcList =
    { region : String
    , data_type : String
    , account : String
    , payload : VpcList
    }


type alias VpcList =
    { vpcs : List Vpc
    }


decodeReceived : String -> Result String RegVpcList
decodeReceived json =
    Json.decodeString decodeRegVpcList json


decodeRegVpcList : Decoder RegVpcList
decodeRegVpcList =
    decode RegVpcList
        |> required "Region" string
        |> required "Type" string
        |> required "Account" string
        |> required "Payload" decodeVpcList


decodeVpcList : Decoder VpcList
decodeVpcList =
    decode VpcList
        |> required "Vpcs" (Json.list decodeVpc)


type alias Vpc =
    { vpc_id : String
    , instance_tenancy : String
    , tags : List VpcTag
    , state : String
    , dhcp_options_id : String
    , cidr_block : String
    , is_default : Bool
    }


decodeVpc : Decoder Vpc
decodeVpc =
    decode Vpc
        |> required "VpcId" string
        |> required "InstanceTenancy" string
        |> optional "Tags" (Json.list decodeVpcTag) []
        |> required "State" string
        |> required "DhcpOptionsId" string
        |> required "CidrBlock" string
        |> required "IsDefault" bool


type alias VpcTag =
    { key : String
    , value : String
    }


decodeVpcTag : Decoder VpcTag
decodeVpcTag =
    decode VpcTag
        |> required "Key" string
        |> required "Value" string
