module AccountsDecoder exposing (..)

import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Json.Decode as Json exposing (..)
import Decode_Utils
import Date
import String


type alias AccountsList =
    { accounts : List Account
    }


type alias Account =
    { account_name : String
    , active : Bool
    }


decodeReceived : String -> Result String AccountsList
decodeReceived json =
    Json.decodeString decodeAccountsList json


decodeAccountsList : Decoder AccountsList
decodeAccountsList =
    decode AccountsList
        |> required "accounts" (Json.list decodeAccount)


decodeAccount : Decoder Account
decodeAccount =
    decode Account
        |> required "account_name" string
        |> required "active" bool
