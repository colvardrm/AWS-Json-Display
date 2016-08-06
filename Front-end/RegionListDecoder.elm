module RegionListDecoder exposing (..)

import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Json.Decode as Json exposing (..)


type alias RegionList =
    { regions : List Region
    }


decodeReceived : String -> Result String RegionList
decodeReceived json =
    Json.decodeString decodeRegionList json


decodeRegionList : Decoder RegionList
decodeRegionList =
    decode RegionList
        |> required "Regions" (Json.list decodeRegion)


type alias Region =
    { endpoint : String
    , region_name : String
    }


decodeRegion : Decoder Region
decodeRegion =
    decode Region
        |> required "Endpoint" string
        |> required "RegionName" string
