module UserDecoder exposing (..)

import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Json.Decode as Json exposing (..)
import Decode_Utils
import Date
import String


type alias UserList =
    { users : List User
    }


type alias User =
    { user_name : String
    }


decodeReceived : String -> Result String UserList
decodeReceived json =
    Json.decodeString decodeUserList json


decodeUserList : Decoder UserList
decodeUserList =
    decode UserList
        |> required "users" (Json.list decodeUser)


decodeUser : Decoder User
decodeUser =
    decode User
        |> required "user_name" string
