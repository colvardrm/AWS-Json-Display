module Decode_Utils exposing (..)

import Date
import Json.Decode as Json exposing (..)
import Date.Format
import Json.Decode.Pipeline exposing (required, decode)
import String


type alias Response =
    { response : String
    }


decodeResponse : Decoder Response
decodeResponse =
    decode Response
        |> required "Response" string


decodeDate : Json.Decoder Date.Date
decodeDate =
    Json.string
        `andThen` \string ->
                    case (Date.fromString string) of
                        Ok decodedDate ->
                            Json.succeed decodedDate

                        Err _ ->
                            Json.fail "Could not decode date from string"


resultToDate : Result String Date.Date -> Date.Date
resultToDate result =
    case result of
        Ok date ->
            date

        _ ->
            Debug.crash "Something went wrong"


dateToStringLong : Date.Date -> String
dateToStringLong date =
    Date.Format.format "%Y/%m/%d" date


decodeInstanceName : Json.Decoder String
decodeInstanceName =
    Json.list decodeTag `andThen` decodeName


decodeName : List Tag -> Decoder String
decodeName tags =
    succeed (String.concat (List.map getNameFromTags tags))


getNameFromTags : Tag -> String
getNameFromTags tag =
    case tag.key of
        "Name" ->
            tag.value

        _ ->
            ""


type alias Tag =
    { value : String
    , key : String
    }


decodeTag : Decoder Tag
decodeTag =
    decode Tag
        |> required "Value" string
        |> required "Key" string
