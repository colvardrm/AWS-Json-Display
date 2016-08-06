module InstanceDecoder exposing (..)

import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)
import Json.Decode as Json exposing (..)
import Decode_Utils
import Date
import String


type alias RegionResList =
    { region : String
    , data_type : String
    , account : String
    , payload : ReservationList
    }


type alias ReservationList =
    { reservations : List Reservation
    }


decodeReceived : String -> Result String RegionResList
decodeReceived json =
    Json.decodeString decodeRegionResList json


decodeRegionResList : Decoder RegionResList
decodeRegionResList =
    decode RegionResList
        |> required "Region" string
        |> required "Type" string
        |> required "Account" string
        |> optional "Payload" decodeReservationList (ReservationList [])


decodeReservationList : Decoder ReservationList
decodeReservationList =
    decode ReservationList
        |> required "Reservations" (Json.list decodeReservation)


type alias Reservation =
    { owner_id : String
    , reservation_id : String
    , groups : List Group
    , instances : List Instance
    }


decodeReservation : Decoder Reservation
decodeReservation =
    decode Reservation
        |> required "OwnerId" string
        |> required "ReservationId" string
        |> required "Groups" (Json.list decodeGroup)
        |> required "Instances" (Json.list decodeInstance)


type alias Group =
    { group_name : String
    , group_id : String
    }


decodeGroup : Decoder Group
decodeGroup =
    decode Group
        |> required "GroupName" string
        |> required "GroupId" string


type alias Instance =
    { name : String
    , monitoring : Monitoring
    , public_dns_name : Maybe String
    , kernel_id : String
    , state : State
    , ebs_optimized : Bool
    , launch_time : Date.Date
    , public_ip_address : String
    , private_ip_address : String
    , product_codes : List ProductCode
    , vpc_id : String
    , state_transition_reason : Maybe String
    , instance_id : String
    , image_id : String
    , private_dns_name : String
    , key_name : String
    , security_groups : List Group
    , client_token : String
    , subnet_id : String
    , instance_type : String
    , network_interfaces : List NetworkInterface
    , source_dest_check : Bool
    , placement : Placement
    , hypervisor : String
    , block_device_mappings : List BlockDeviceMapping
    , architecture : String
    , state_reason : StateReason
    , iam_instance_profile : IamInstanceProfile
    , root_device_name : String
    , root_device_type : String
    , virtualization_type : String
    , tags : List Decode_Utils.Tag
    , ami_launch_index : Int
    }


decodeInstance : Decoder Instance
decodeInstance =
    decode Instance
        |> required "Tags" Decode_Utils.decodeInstanceName
        |> required "Monitoring" decodeMonitoring
        |> required "PublicDnsName" (maybe string)
        |> optional "KernelId" string "No KernelId"
        |> required "State" decodeState
        |> required "EbsOptimized" bool
        |> required "LaunchTime" Decode_Utils.decodeDate
        |> optional "PublicIpAddress" string ""
        |> optional "PrivateIpAddress" string ""
        |> required "ProductCodes" (Json.list decodeProductCode)
        |> optional "VpcId" string ""
        |> required "StateTransitionReason" (maybe string)
        |> required "InstanceId" string
        |> required "ImageId" string
        |> required "PrivateDnsName" string
        |> optional "KeyName" string ""
        |> required "SecurityGroups" (Json.list decodeGroup)
        |> required "ClientToken" string
        |> optional "SubnetId" string ""
        |> required "InstanceType" string
        |> required "NetworkInterfaces" (Json.list decodeNetworkInterface)
        |> optional "SourceDestCheck" bool False
        |> optional "Placement" decodePlacement (Placement "" (Nothing) "")
        |> required "Hypervisor" string
        |> required "BlockDeviceMappings" (Json.list decodeBlockDeviceMapping)
        |> required "Architecture" string
        |> optional "StateReason" decodeStateReason (StateReason "" "")
        |> optional "IamInstanceProfile" decodeIamInstanceProfile (IamInstanceProfile "" "")
        |> required "RootDeviceName" string
        |> required "VirtualizationType" string
        |> required "RootDeviceType" string
        |> required "Tags" (Json.list Decode_Utils.decodeTag)
        |> required "AmiLaunchIndex" int


type alias Monitoring =
    { state : String
    }


decodeMonitoring : Decoder Monitoring
decodeMonitoring =
    decode Monitoring
        |> required "State" string


type alias State =
    { code : Int
    , name : String
    }


decodeState : Decoder State
decodeState =
    decode State
        |> required "Code" int
        |> required "Name" string


type alias ProductCode =
    { product_code_id : String
    , product_code_type : String
    }


decodeProductCode : Decoder ProductCode
decodeProductCode =
    decode ProductCode
        |> required "ProductCodeId" string
        |> required "ProductCodeType" string


type alias NetworkInterface =
    { status : String
    , source_dest_check : Bool
    , vpc_id : String
    , description : Maybe String
    , association : Association
    , network_interface_id : String
    , private_ip_addresses : List PrivateIpAddress
    , private_dns_name : String
    , attachment : Attachment
    , groups : List Group
    , subnet_id : String
    , owner_id : String
    , private_ip_address : String
    }


decodeNetworkInterface : Decoder NetworkInterface
decodeNetworkInterface =
    decode NetworkInterface
        |> required "Status" string
        |> required "SourceDestCheck" bool
        |> required "VpcId" string
        |> required "Description" (maybe string)
        |> optional "Association" decodeAssociation (Association "" "" "")
        |> required "NetworkInterfaceId" string
        |> optional "PrivateIpAddresses" (Json.list decodePrivateIpAddress) []
        |> required "PrivateDnsName" string
        |> required "Attachment" decodeAttachment
        |> required "Groups" (Json.list decodeGroup)
        |> required "SubnetId" string
        |> required "OwnerId" string
        |> optional "PrivateIpAddress" string ""


type alias Association =
    { public_ip : String
    , public_dns_name : String
    , ip_owner_id : String
    }


decodeAssociation : Decoder Association
decodeAssociation =
    decode Association
        |> required "PublicIp" string
        |> required "PublicDnsName" string
        |> required "IpOwnerId" string


type alias PrivateIpAddress =
    { private_dns_name : String
    , association : Association
    , primary : Bool
    , private_ip_address : String
    }


decodePrivateIpAddress : Decoder PrivateIpAddress
decodePrivateIpAddress =
    decode PrivateIpAddress
        |> required "PrivateDnsName" string
        |> optional "Association" decodeAssociation (Association "" "" "")
        |> required "Primary" bool
        |> required "PrivateIpAddress" string


type alias Attachment =
    { status : String
    , device_index : Int
    , delete_on_termination : Bool
    , attachment_id : String
    , attach_time : Date.Date
    }


decodeAttachment : Decoder Attachment
decodeAttachment =
    decode Attachment
        |> required "Status" string
        |> required "DeviceIndex" int
        |> required "DeleteOnTermination" bool
        |> required "AttachmentId" string
        |> required "AttachTime" Decode_Utils.decodeDate


type alias Placement =
    { tenancy : String
    , group_name : Maybe String
    , availability_zone : String
    }


decodePlacement : Decoder Placement
decodePlacement =
    decode Placement
        |> required "Tenancy" string
        |> required "GroupName" (maybe string)
        |> required "AvailabilityZone" string


type alias BlockDeviceMapping =
    { device_name : String
    , ebs : Ebs
    }


decodeBlockDeviceMapping : Decoder BlockDeviceMapping
decodeBlockDeviceMapping =
    decode BlockDeviceMapping
        |> required "DeviceName" string
        |> required "Ebs" decodeEbs


type alias Ebs =
    { status : String
    , delete_on_termination : Bool
    , volume_id : String
    , attach_time : Date.Date
    }


decodeEbs : Decoder Ebs
decodeEbs =
    decode Ebs
        |> required "Status" string
        |> required "DeleteOnTermination" bool
        |> required "VolumeId" string
        |> required "AttachTime" Decode_Utils.decodeDate


type alias StateReason =
    { message : String
    , code : String
    }


decodeStateReason : Decoder StateReason
decodeStateReason =
    decode StateReason
        |> required "Message" string
        |> required "Code" string


type alias IamInstanceProfile =
    { id : String
    , arn : String
    }


decodeIamInstanceProfile : Decoder IamInstanceProfile
decodeIamInstanceProfile =
    decode IamInstanceProfile
        |> required "Id" string
        |> required "Arn" string
