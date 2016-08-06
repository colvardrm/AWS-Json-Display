module VolumeDecoder exposing (..)

import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Json.Decode as Json exposing (..)
import Decode_Utils
import Date


type alias RegionVolList =
    { region : String
    , data_type : String
    , account : String
    , payload : VolumeList
    }


type alias VolumeList =
    { volumes : List Volume
    }


decodeReceived : String -> Result String RegionVolList
decodeReceived str =
    Json.decodeString decodeRegionVolList str


decodeRegionVolList : Decoder RegionVolList
decodeRegionVolList =
    decode RegionVolList
        |> required "Region" string
        |> required "Type" string
        |> required "Account" string
        |> required "Payload" decodeVolumeList


decodeVolumeList : Decoder VolumeList
decodeVolumeList =
    decode VolumeList
        |> required "Volumes" (Json.list decodeVolume)


type alias Volume =
    { availability_zone : String
    , attachments : List Attachment
    , volume_type : String
    , volume_id : String
    , state : String
    , iops : Int
    , snapshot_id : String
    , create_time : Date.Date
    , create_time_string : String
    , size : Int
    }


decodeVolume : Json.Decoder Volume
decodeVolume =
    decode Volume
        |> required "AvailabilityZone" Json.string
        |> optional "Attachments" (Json.list decodeAttachment) []
        |> required "VolumeType" Json.string
        |> required "VolumeId" Json.string
        |> required "State" Json.string
        |> optional "Iops" Json.int 0
        |> required "SnapshotId" Json.string
        |> required "CreateTime" Decode_Utils.decodeDate
        |> required "CreateTime" Json.string
        |> required "Size" Json.int


type alias Attachment =
    { attach_time : Date.Date
    , instance_id : String
    , volumeId : String
    , state : String
    , delete_on_termination : Bool
    , device : String
    }


decodeAttachment : Json.Decoder Attachment
decodeAttachment =
    decode Attachment
        |> required "AttachTime" Decode_Utils.decodeDate
        |> required "InstanceId" Json.string
        |> required "VolumeId" Json.string
        |> required "State" Json.string
        |> required "DeleteOnTermination" Json.bool
        |> required "Device" Json.string
