module DisplayJson exposing (..)

import Html exposing (..)
import Html.App as Html
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode as Json
import Task
import VolumeDecoder
import InstanceDecoder
import AccountsDecoder
import UserDecoder
import Dict
import Date.Format
import Date
import Set
import WebSocket
import RegionListDecoder
import VpcDecoder
import Http
import Json.Encode
import String
import VpcDataDecoder
import Date.Math as DMath
import Time
import Dialog
import Decode_Utils


main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias VolumeSorterHelper =
    { account : String
    , region : String
    , volume : VolumeDecoder.Volume
    }


type alias InstanceSorterHelper =
    { account : String
    , region : String
    , instance : InstanceDecoder.Instance
    }


type InstanceSort
    = InstanceId
    | InstanceName
    | InstanceAccount
    | NoInstanceSort


type VolumeSort
    = VolumeId
    | CreateTime
    | VolumeSize
    | VolumeType
    | Iops
    | State
    | AvailabilityZone
    | VolumeAccount
    | NoVolumeSort


type ActiveTab
    = VolumesAndInstancesTab
    | VpcTab
    | AccountsTab


type VpcSort
    = VpcId
    | VpcName
    | VpcAccount
    | VpcRegion
    | TotalNumServers
    | FirstSeen
    | FirstSeenWithServers
    | LastSeen
    | LastSeenWithServers
    | NoVpcSort


type alias Model =
    { websocketAddress : String
    , instanceJson : List InstanceDecoder.ReservationList
    , volumeJson : List VolumeDecoder.VolumeList
    , reservations : List InstanceDecoder.Reservation
    , volumeList : List VolumeSorterHelper
    , instanceList : List InstanceSorterHelper
    , placementList : List InstanceDecoder.Placement
    , instanceRegionFilterSet : Set.Set String
    , volumeRegionFilterSet : Set.Set String
    , instanceRegionSet : Set.Set String
    , volumeRegionSet : Set.Set String
    , printVolumeList : List VolumeSorterHelper
    , printInstanceList : List InstanceSorterHelper
    , printVpcList : List VpcDataDecoder.Vpc
    , showNonEmptyVolumes : Bool
    , emptyVolumeRegions : Set.Set String
    , regionsJson : RegionListDecoder.RegionList
    , regions : Set.Set String
    , vpcs : List VpcDecoder.VpcList
    , display : Display
    , vpcStatus : String
    , volumeStatus : String
    , instanceDict : Dict.Dict ( String, String ) InstanceDecoder.RegionResList
    , volumeDict : Dict.Dict ( String, String ) VolumeDecoder.RegionVolList
    , vpcDict : Dict.Dict String VpcDecoder.VpcList
    , vpcList : List VpcDecoder.Vpc
    , vpcInstanceDict : Dict.Dict String (List InstanceDecoder.Instance)
    , instanceFiltersChecked : Dict.Dict String Bool
    , volumeFiltersChecked : Dict.Dict String Bool
    , volumesToRemove : Set.Set String
    , vpcData : VpcDataDecoder.VpcData
    , currentTime : Date.Date
    , smallVpcDict : Dict.Dict String VpcDecoder.Vpc
    , volumeSort : VolumeSort
    , vpcSort : VpcSort
    , instanceSort : InstanceSort
    , status : String
    , vpcsToRemove : Set.Set String
    , vpcToRegionDict : Dict.Dict String String
    , activeTab : ActiveTab
    , showVpcDialog : Bool
    , showVolumeDialog : Bool
    , vpcToDelete : Info
    , volumeToDelete : Info
    , accountsJson : AccountsDecoder.AccountsList
    , newAccountPrompt : Html Msg
    , newAccountUser : String
    , newAccountName : String
    , newAccountAccessKey : String
    , newAccountSecret : String
    , newAccountMFA : String
    , accountStatus : String
    , usersJson : UserDecoder.UserList
    }


type alias Info =
    { type_info : String
    , id : String
    , region : String
    , account : String
    }


type alias InstanceVolume =
    { deviceName : String
    , ebs : InstanceDecoder.Ebs
    }


type Display
    = InstancesAndVolumes
    | Vpcs
    | Accounts


init : ( Model, Cmd Msg )
init =
    let
        websocketAddress =
            ""

        reservations =
            List.concatMap getReservations instanceJson

        volumeJson =
            []

        instanceDict =
            Dict.empty

        volumeDict =
            Dict.empty

        instanceJson =
            []

        instanceList =
            []

        placementList =
            []

        volumeList =
            []

        instanceRegionSet =
            Set.empty

        volumeRegionSet =
            Set.empty

        printVolumeList =
            []

        printInstanceList =
            []

        printVpcList =
            []

        regionsJson =
            RegionListDecoder.RegionList []

        regions =
            Set.empty

        vpcs =
            []

        showNonEmptyVolumes =
            True

        emptyVolumeRegions =
            Set.empty

        vpcStatus =
            ""

        volumeStatus =
            ""

        vpcDict =
            Dict.empty

        vpcInstanceDict =
            Dict.empty

        vpcList =
            []

        instanceFiltersChecked =
            Dict.empty

        volumeFiltersChecked =
            Dict.empty

        volumesToRemove =
            Set.empty

        vpcData =
            VpcDataDecoder.VpcData []

        currentTime =
            Date.fromTime Time.millisecond

        smallVpcDict =
            Dict.empty

        volumeSort =
            NoVolumeSort

        vpcSort =
            NoVpcSort

        instanceSort =
            NoInstanceSort

        status =
            ""

        vpcsToRemove =
            Set.empty

        vpcToRegionDict =
            Dict.empty

        activeTab =
            AccountsTab

        showVpcDialog =
            False

        showVolumeDialog =
            False

        vpcToDelete =
            Info "" "" "" ""

        volumeToDelete =
            Info "" "" "" ""

        accountsJson =
            AccountsDecoder.AccountsList []

        newAccountPrompt =
            div [] []

        newAccountUser =
            ""

        newAccountName =
            ""

        newAccountAccessKey =
            ""

        newAccountSecret =
            ""

        newAccountMFA =
            ""

        accountStatus =
            ""

        usersJson =
            UserDecoder.UserList []
    in
        ( Model websocketAddress
            instanceJson
            volumeJson
            reservations
            volumeList
            instanceList
            placementList
            instanceRegionSet
            volumeRegionSet
            instanceRegionSet
            volumeRegionSet
            printVolumeList
            printInstanceList
            printVpcList
            showNonEmptyVolumes
            emptyVolumeRegions
            regionsJson
            regions
            vpcs
            Accounts
            vpcStatus
            volumeStatus
            instanceDict
            volumeDict
            vpcDict
            vpcList
            vpcInstanceDict
            instanceFiltersChecked
            volumeFiltersChecked
            volumesToRemove
            vpcData
            currentTime
            smallVpcDict
            volumeSort
            vpcSort
            instanceSort
            status
            vpcsToRemove
            vpcToRegionDict
            activeTab
            showVpcDialog
            showVolumeDialog
            vpcToDelete
            volumeToDelete
            accountsJson
            newAccountPrompt
            newAccountUser
            newAccountName
            newAccountAccessKey
            newAccountSecret
            newAccountMFA
            accountStatus
            usersJson
        , getRegionsFromServer
        )


getPayload regionResList =
    regionResList.payload


getReservations instanceJson =
    instanceJson.reservations


getRegionFromInstance instance =
    instance.placement.availability_zone


getVolumeRegionSet volumeList =
    List.map getRegionFromVolume volumeList


getRegionFromVolume volume =
    volume.availability_zone


getPlacement instanceHelper =
    instanceHelper.instance.placement



-- UPDATE


type Msg
    = RemoveVolume Info
    | RemoveVpc Info
    | ConfirmVpcRemoval Info
    | CancelVpcRemoval
    | ConfirmVolumeRemoval Info
    | CancelVolumeRemoval
    | SortByVolumeId
    | SortByCreateTime
    | SortByVolumeSize
    | SortByVolumeType
    | SortByIops
    | SortByState
    | SortVolumeByAvailabilityZone
    | SortVolumeByAccount
    | SortVpcById
    | SortVpcByName
    | SortVpcByAccount
    | SortVpcByRegion
    | SortVpcByTotalNumServers
    | SortVpcByFirstSeen
    | SortVpcByFirstSeenWithServers
    | SortVpcByLastSeen
    | SortVpcByLastSeenWithServers
    | SortInstanceByInstanceId
    | SortInstanceByName
    | SortInstanceByAccount
    | FilterInstanceByRegion String Bool
    | FilterVolumeByRegion String Bool
    | FilterVolumeByEmpty Bool
    | ChangeNewAccountUser String
    | ChangeNewAccountName String
    | ChangeNewAccountAccessKey String
    | ChangeNewAccountSecret String
    | ChangeNewAccountMFA String
    | AddAccount
    | CancelAddAccount
    | Refresh
    | NewMessage String
    | DisplayVpc
    | DisplayVAndI
    | DisplayAccounts
    | GetRegionsFail Http.Error
    | GetRegionsSucceed RegionListDecoder.RegionList
    | AddAccountFail Http.Error
    | AddAccountSucceed Decode_Utils.Response
    | Tick Float
    | GetTimeSucceed Date.Date
    | GetTimeFail String
    | PromptNewAccount


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetRegionsFail _ ->
            ( { model | status = "Could not get regions" }, Cmd.none )

        GetRegionsSucceed regionsJson ->
            getRegionsSucceedHandler model regionsJson

        AddAccountFail error ->
            ( { model
                | accountStatus = ("Could not add account. Reason: " ++ (toString error))
                , newAccountUser = ""
                , newAccountName = ""
                , newAccountAccessKey = ""
                , newAccountSecret = ""
                , newAccountMFA = ""
              }
            , Cmd.none
            )

        AddAccountSucceed result ->
            ( { model
                | accountStatus = result.response
                , newAccountUser = ""
                , newAccountName = ""
                , newAccountAccessKey = ""
                , newAccountSecret = ""
                , newAccountMFA = ""
              }
            , Cmd.none
            )

        DisplayVAndI ->
            ( { model
                | display = InstancesAndVolumes
                , activeTab = VolumesAndInstancesTab
                , accountStatus = ""
              }
            , Cmd.none
            )

        DisplayVpc ->
            ( { model
                | display = Vpcs
                , activeTab = VpcTab
                , accountStatus = ""
              }
            , Cmd.none
            )

        DisplayAccounts ->
            ( { model
                | display = Accounts
                , activeTab = AccountsTab
              }
            , Cmd.none
            )

        RemoveVolume info ->
            ( { model
                | volumeToDelete = info
                , showVolumeDialog = True
              }
            , Cmd.none
            )

        ConfirmVolumeRemoval info ->
            let
                volumesToRemove =
                    Set.insert info.id model.volumesToRemove

                volumeStatus =
                    ("Removing: " ++ String.join ", " (Set.toList volumesToRemove))
            in
                ( { model
                    | volumesToRemove = volumesToRemove
                    , volumeStatus = volumeStatus
                    , volumeToDelete = Info "" "" "" ""
                    , showVolumeDialog = False
                  }
                , WebSocket.send model.websocketAddress (String.join " " [ info.account, info.type_info, info.region, info.id ])
                )

        CancelVolumeRemoval ->
            ( { model
                | showVolumeDialog = False
                , volumeToDelete = Info "" "" "" ""
              }
            , Cmd.none
            )

        PromptNewAccount ->
            ( { model
                | newAccountPrompt = makeAccountPrompt model.accountsJson model.usersJson
              }
            , Cmd.none
            )

        RemoveVpc info ->
            ( { model
                | vpcToDelete = info
                , showVpcDialog = True
              }
            , Cmd.none
            )

        ConfirmVpcRemoval info ->
            let
                vpcsToRemove =
                    Set.insert info.id model.vpcsToRemove

                vpcStatus =
                    ("Removing: " ++ String.join ", " (Set.toList vpcsToRemove))
            in
                ( { model
                    | vpcsToRemove = vpcsToRemove
                    , vpcStatus = vpcStatus
                    , vpcToDelete = Info "" "" "" ""
                    , showVpcDialog = False
                  }
                , WebSocket.send model.websocketAddress (String.join " " [ info.account, info.type_info, info.region, info.id ])
                )

        CancelVpcRemoval ->
            ( { model
                | showVpcDialog = False
                , vpcToDelete = Info "" "" "" ""
              }
            , Cmd.none
            )

        Tick newTime ->
            ( model, Task.perform GetTimeFail GetTimeSucceed Date.now )

        GetTimeFail err ->
            ( model, Cmd.none )

        GetTimeSucceed now ->
            ( { model | currentTime = now }, Cmd.none )

        SortByVolumeId ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByVolumeId model.printVolumeList
                , volumeSort = VolumeId
              }
            , Cmd.none
            )

        SortByCreateTime ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByCreateTime model.printVolumeList
                , volumeSort = CreateTime
              }
            , Cmd.none
            )

        SortByVolumeSize ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByVolumeSize model.printVolumeList
                , volumeSort = VolumeSize
              }
            , Cmd.none
            )

        SortByVolumeType ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByVolumeType model.printVolumeList
                , volumeSort = VolumeType
              }
            , Cmd.none
            )

        SortByIops ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByIops model.printVolumeList
                , volumeSort = Iops
              }
            , Cmd.none
            )

        SortByState ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByState model.printVolumeList
                , volumeSort = State
              }
            , Cmd.none
            )

        SortVolumeByAvailabilityZone ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByAvailabilityZone model.printVolumeList
                , volumeSort = AvailabilityZone
              }
            , Cmd.none
            )

        SortVolumeByAccount ->
            ( { model
                | printVolumeList = List.sortWith sortVolumesByAccount model.printVolumeList
                , volumeSort = VolumeAccount
              }
            , Cmd.none
            )

        SortVpcById ->
            ( { model
                | printVpcList = List.sortBy .vpc_id model.printVpcList
                , vpcSort = VpcId
              }
            , Cmd.none
            )

        SortVpcByName ->
            ( { model
                | printVpcList = List.sortBy .name model.printVpcList
                , vpcSort = VpcName
              }
            , Cmd.none
            )

        SortVpcByAccount ->
            ( { model
                | printVpcList = List.sortBy .account model.printVpcList
                , vpcSort = VpcAccount
              }
            , Cmd.none
            )

        SortVpcByRegion ->
            ( { model
                | printVpcList = List.sortBy .region model.printVpcList
                , vpcSort = VpcRegion
              }
            , Cmd.none
            )

        SortVpcByTotalNumServers ->
            ( { model
                | printVpcList = List.sortBy .total_num_servers model.printVpcList
                , vpcSort = TotalNumServers
              }
            , Cmd.none
            )

        SortVpcByFirstSeen ->
            ( { model
                | printVpcList = List.sortBy .first_seen model.printVpcList
                , vpcSort = FirstSeen
              }
            , Cmd.none
            )

        SortVpcByFirstSeenWithServers ->
            ( { model
                | printVpcList = List.sortBy .first_seen_with_servers model.printVpcList
                , vpcSort = FirstSeenWithServers
              }
            , Cmd.none
            )

        SortVpcByLastSeen ->
            ( { model
                | printVpcList = List.sortBy .last_seen model.printVpcList
                , vpcSort = LastSeen
              }
            , Cmd.none
            )

        SortVpcByLastSeenWithServers ->
            ( { model
                | printVpcList = List.sortBy .last_seen_with_servers model.printVpcList
                , vpcSort = LastSeenWithServers
              }
            , Cmd.none
            )

        SortInstanceByInstanceId ->
            ( { model
                | printInstanceList = List.sortWith sortInstancesByInstanceId model.printInstanceList
                , instanceSort = InstanceId
              }
            , Cmd.none
            )

        SortInstanceByName ->
            ( { model
                | printInstanceList = List.sortWith sortInstancesByName model.printInstanceList
                , instanceSort = InstanceName
              }
            , Cmd.none
            )

        SortInstanceByAccount ->
            ( { model
                | printInstanceList = List.sortWith sortInstancesByAccount model.printInstanceList
                , instanceSort = InstanceAccount
              }
            , Cmd.none
            )

        FilterInstanceByRegion string bool ->
            filterInstanceByRegionHandler model string bool

        FilterVolumeByRegion string bool ->
            filterVolumeByRegionHandler model string bool

        FilterVolumeByEmpty bool ->
            filterVolumeByEmptyHandler model bool

        ChangeNewAccountUser content ->
            ( { model | newAccountUser = content }, Cmd.none )

        ChangeNewAccountName content ->
            ( { model | newAccountName = content }, Cmd.none )

        ChangeNewAccountAccessKey content ->
            ( { model | newAccountAccessKey = content }, Cmd.none )

        ChangeNewAccountSecret content ->
            ( { model | newAccountSecret = content }, Cmd.none )

        ChangeNewAccountMFA content ->
            ( { model | newAccountMFA = content }, Cmd.none )

        AddAccount ->
            checkValidity model

        CancelAddAccount ->
            ( { model
                | newAccountPrompt = div [] []
                , newAccountName = ""
                , newAccountAccessKey = ""
                , newAccountSecret = ""
                , newAccountMFA = ""
              }
            , Cmd.none
            )

        Refresh ->
            ( model, Cmd.none )

        NewMessage str ->
            case InstanceDecoder.decodeReceived str of
                Ok regionRes ->
                    changeInstanceInfo model regionRes

                -- changeInstanceInfo model instances
                Err reason ->
                    case VolumeDecoder.decodeReceived str of
                        Ok regionVol ->
                            changeVolumeInfo model regionVol

                        Err reason ->
                            case VpcDecoder.decodeReceived str of
                                Ok vpcs ->
                                    changeVpcInfo model vpcs

                                Err reason ->
                                    case VpcDataDecoder.decodeReceived str of
                                        Ok data ->
                                            changeVpcData model data

                                        Err reason ->
                                            case AccountsDecoder.decodeReceived str of
                                                Ok accounts ->
                                                    changeAccountsInfo model accounts

                                                Err reason ->
                                                    case UserDecoder.decodeReceived str of
                                                        Ok users ->
                                                            changeUserInfo model users

                                                        Err _ ->
                                                            ( model, Cmd.none )


checkValidity model =
    let
        userMessage =
            case model.newAccountUser of
                "Select a user" ->
                    "user"

                "" ->
                    "user"

                _ ->
                    ""

        accountMessage =
            case model.newAccountName of
                "Select an account" ->
                    "account"

                "" ->
                    "account"

                _ ->
                    ""

        accessKeyMessage =
            case model.newAccountAccessKey of
                "" ->
                    "access key id"

                _ ->
                    ""

        secretKeyMessage =
            case model.newAccountSecret of
                "" ->
                    "secret access key"

                _ ->
                    ""

        mfaMessage =
            case model.newAccountMFA of
                "" ->
                    "mfa key"

                _ ->
                    ""

        warnings =
            List.filter warningPresent [ userMessage, accountMessage, accessKeyMessage, secretKeyMessage, mfaMessage ]

        mfaLengthWarning =
            case String.length model.newAccountMFA of
                6 ->
                    ""

                _ ->
                    "MFA key must be 6 characters."

        newAccountStatus =
            case List.length warnings of
                0 ->
                    mfaLengthWarning

                _ ->
                    ("Fields required and left empty: " ++ (String.join ", " warnings) ++ ". " ++ mfaLengthWarning)
    in
        case newAccountStatus of
            "" ->
                ( { model | newAccountPrompt = div [] [] }
                , Task.perform AddAccountFail AddAccountSucceed (addAccount model.newAccountUser model.newAccountName model.newAccountAccessKey model.newAccountSecret model.newAccountMFA)
                )

            _ ->
                ( { model | accountStatus = newAccountStatus }, Cmd.none )


warningPresent message =
    case String.isEmpty message of
        True ->
            False

        False ->
            True


addAccount user name accessKey secret mfa =
    Http.post (Decode_Utils.decodeResponse)
        "http://127.0.0.1:8080/api/accounts"
        (Http.string ("{ \"user\": \"" ++ user ++ "\", \"name\": \"" ++ name ++ "\", \"access_key\": \"" ++ accessKey ++ "\", \"secret\": \"" ++ secret ++ "\", \"mfa\" : \"" ++ mfa ++ "\"}"))


makeAccountPrompt accountsJson usersJson =
    div [ class "container-fluid" ]
        [ Html.form [ class "form-horizontal", onSubmit AddAccount ]
            [ div [ class "form-group" ]
                [ label [ class "control-label col-md-2", for "user" ] [ text "User:" ]
                , div [ class "col-md-3" ]
                    [ select [ class "form-control", onInput ChangeNewAccountUser ] ([ option [ selected True ] [ text "Select a user" ] ] ++ (List.map printUserSelectList usersJson.users))
                    ]
                ]
            , div [ class "form-group" ]
                [ label [ class "control-label col-md-2", for "account name" ] [ text "Account Name:" ]
                , div [ class "col-md-3" ]
                    [ select [ class "form-control", onInput ChangeNewAccountName ] ([ option [ selected True ] [ text "Select an account" ] ] ++ (List.concatMap printAccountSelectList accountsJson.accounts))
                    ]
                ]
            , div [ class "form-group" ]
                [ label [ class "control-label col-md-2", for "access key id" ] [ text "Access Key Id:" ]
                , div [ class "col-md-3" ]
                    [ input [ type' "password", onInput ChangeNewAccountAccessKey, class "form-control", placeholder "Enter access key id" ] []
                    ]
                ]
            , div [ class "form-group" ]
                [ label [ class "control-label col-md-2", for "secret access key" ] [ text "Secret Access Key:" ]
                , div [ class "col-md-3" ]
                    [ input [ type' "password", onInput ChangeNewAccountSecret, class "form-control", placeholder "Enter secret access key" ] []
                    ]
                ]
            , div [ class "form-group" ]
                [ label [ class "control-label col-md-2", for "mfa" ] [ text "Multifactor Authentication Key:" ]
                , div [ class "col-md-3" ]
                    [ input [ type' "password", onInput ChangeNewAccountMFA, class "form-control", placeholder "Enter mfa key" ] []
                    ]
                ]
            , div [ class "form-group" ]
                [ div [ class "col-md-offset-2 col-md-10" ]
                    [ button [ type' "submit", class "btn btn-default" ] [ text "Submit" ]
                    , button [ type' "button", onClick CancelAddAccount, id "AddAccountCancel", class "btn btn-default" ] [ text "Cancel" ]
                    ]
                ]
            ]
        ]


printAccountSelectList account =
    case account.active of
        False ->
            [ option [] [ text account.account_name ] ]

        True ->
            []


printUserSelectList user =
    option [] [ text user.user_name ]


changeAccountsInfo model accounts =
    ( { model | accountsJson = accounts }, Cmd.none )


changeUserInfo model users =
    ( { model | usersJson = users }, Cmd.none )


changeVpcData model data =
    let
        vpcData =
            data

        printVpcList =
            List.concatMap getAccountVpcs data.accounts

        vpcsToRemove =
            Set.empty

        orderedVpcList =
            case model.vpcSort of
                NoVpcSort ->
                    printVpcList

                VpcId ->
                    List.sortBy .vpc_id printVpcList

                VpcName ->
                    List.sortBy .name printVpcList

                VpcAccount ->
                    List.sortBy .account printVpcList

                VpcRegion ->
                    List.sortBy .region printVpcList

                FirstSeen ->
                    List.sortBy .first_seen printVpcList

                FirstSeenWithServers ->
                    List.sortBy .first_seen_with_servers printVpcList

                TotalNumServers ->
                    List.sortBy .total_num_servers printVpcList

                LastSeen ->
                    List.sortBy .last_seen printVpcList

                LastSeenWithServers ->
                    List.sortBy .last_seen_with_servers printVpcList
    in
        ( { model
            | vpcData = vpcData
            , printVpcList = orderedVpcList
            , vpcsToRemove = Set.empty
            , vpcStatus = ""
          }
        , Cmd.none
        )


makeVpcToRegionDictEntry region =
    List.map (makeVpcEntry region) region.vpcs


makeVpcEntry region vpc =
    ( vpc.vpc_id, region )


getRegionsSucceedHandler model regionsJson =
    let
        regions =
            Set.fromList (List.map getRegionName regionsJson.regions)

        instanceRegionSet =
            regions

        instanceRegionFilterSet =
            instanceRegionSet

        volumeRegionSet =
            regions

        volumeFiltersChecked =
            regionsToDict regionsJson.regions

        instanceFiltersChecked =
            regionsToDict regionsJson.regions

        volumeRegionFilterSet =
            regions
    in
        ( { model
            | regionsJson = regionsJson
            , regions = Set.fromList (List.map getRegionName regionsJson.regions)
            , instanceRegionSet = instanceRegionSet
            , instanceRegionFilterSet = instanceRegionFilterSet
            , volumeRegionSet = volumeRegionSet
            , volumeRegionFilterSet = volumeRegionFilterSet
            , volumeFiltersChecked = volumeFiltersChecked
            , instanceFiltersChecked = instanceFiltersChecked
          }
        , Cmd.none
        )


regionsToDict regions =
    List.map regionToDictEntry regions |> Dict.fromList


regionToDictEntry region =
    ( region.region_name, True )


filterVolumeByEmptyHandler model bool =
    ( let
        newShowNonEmpty =
            bool

        newPrintVolumeList =
            filterVolumesByEmpty newShowNonEmpty model.volumeList model.volumeRegionFilterSet
      in
        { model
            | showNonEmptyVolumes = newShowNonEmpty
            , printVolumeList = newPrintVolumeList
        }
    , Cmd.none
    )


filterVolumeByRegionHandler model string bool =
    ( if bool then
        let
            newVolumeFiltersChecked =
                Dict.insert string bool model.volumeFiltersChecked

            newVolumeRegionFilterSet =
                Set.insert string model.volumeRegionFilterSet

            newPrintVolumeList =
                filterVolumesByRegion newVolumeRegionFilterSet model model.volumeList
        in
            { model
                | volumeRegionFilterSet = newVolumeRegionFilterSet
                , printVolumeList = newPrintVolumeList
                , volumeFiltersChecked = newVolumeFiltersChecked
            }
      else
        let
            newVolumeFiltersChecked =
                Dict.insert string bool model.volumeFiltersChecked

            newVolumeRegionFilterSet =
                Set.remove string model.volumeRegionFilterSet

            newPrintVolumeList =
                filterVolumesByRegion newVolumeRegionFilterSet model model.volumeList
        in
            { model
                | volumeRegionFilterSet = newVolumeRegionFilterSet
                , printVolumeList = newPrintVolumeList
                , volumeFiltersChecked = newVolumeFiltersChecked
            }
    , Cmd.none
    )


filterInstanceByRegionHandler model string bool =
    ( if bool then
        let
            newInstanceFiltersChecked =
                Dict.insert string bool model.instanceFiltersChecked

            newInstanceRegionFilterSet =
                Set.insert string model.instanceRegionFilterSet

            newPrintInstanceList =
                filterInstances newInstanceRegionFilterSet model.instanceList
        in
            { model
                | instanceRegionFilterSet = newInstanceRegionFilterSet
                , printInstanceList = newPrintInstanceList
                , instanceFiltersChecked = newInstanceFiltersChecked
            }
      else
        let
            newInstanceFiltersChecked =
                Dict.insert string bool model.instanceFiltersChecked

            newInstanceRegionFilterSet =
                Set.remove string model.instanceRegionFilterSet

            newPrintInstanceList =
                filterInstances newInstanceRegionFilterSet model.instanceList
        in
            { model
                | instanceRegionFilterSet = newInstanceRegionFilterSet
                , printInstanceList = newPrintInstanceList
                , instanceFiltersChecked = newInstanceFiltersChecked
            }
    , Cmd.none
    )


getRegionName region =
    region.region_name


changeInstanceInfo : Model -> InstanceDecoder.RegionResList -> ( Model, Cmd Msg )
changeInstanceInfo model regionRes =
    let
        instanceDict =
            Dict.insert ( regionRes.account, regionRes.region ) regionRes model.instanceDict

        instanceList =
            List.concatMap makeInstanceSorterHelpers (Dict.toList instanceDict)

        placementList =
            List.map getPlacement instanceList

        printInstanceList =
            filterInstances model.instanceRegionFilterSet instanceList

        orderedInstanceList =
            case model.instanceSort of
                NoInstanceSort ->
                    printInstanceList

                InstanceId ->
                    List.sortWith sortInstancesByInstanceId printInstanceList

                InstanceName ->
                    List.sortWith sortInstancesByName printInstanceList

                InstanceAccount ->
                    List.sortWith sortInstancesByAccount printInstanceList

        vpcInstanceDict =
            case model.vpcList of
                [] ->
                    Dict.empty

                vpcList ->
                    makeVpcInstanceDict model
    in
        ( { model
            | instanceList = instanceList
            , placementList = placementList
            , printInstanceList = orderedInstanceList
            , instanceDict = instanceDict
            , vpcInstanceDict = vpcInstanceDict
          }
        , Cmd.none
        )


makeInstanceSorterHelpers ( ( account, region ), regionResList ) =
    List.concatMap (makeReservationSorterHelper account region) regionResList.payload.reservations


makeReservationSorterHelper account region reservation =
    List.map (makeInstanceSorterHelper account region) reservation.instances


makeInstanceSorterHelper account region instance =
    InstanceSorterHelper account region instance


makeVpcInstanceDict model =
    Dict.fromList (List.map (makeVpcInstanceEntry model.instanceList) model.vpcList)


makeVpcInstanceEntry instanceList vpc =
    let
        matchingInstances =
            List.filterMap (testVpcInstance vpc) instanceList
    in
        ( vpc.vpc_id, matchingInstances )


testVpcInstance vpc instanceHelper =
    case (instanceHelper.instance.vpc_id == vpc.vpc_id) of
        True ->
            Just instanceHelper.instance

        False ->
            Nothing


changeVolumeInfo : Model -> VolumeDecoder.RegionVolList -> ( Model, Cmd Msg )
changeVolumeInfo model regionVol =
    let
        volumeDict =
            Dict.insert ( regionVol.account, regionVol.region ) regionVol model.volumeDict

        volumeList =
            List.concatMap makeVolumeSorterHelpers (Dict.toList volumeDict)

        volumeRegionSet =
            model.regions

        printVolumeList =
            filterVolumesByRegion model.volumeRegionFilterSet model volumeList

        orderedVolumeList =
            makeOrderedVolumeList model printVolumeList
    in
        ( { model
            | volumeList = volumeList
            , volumeRegionSet = volumeRegionSet
            , volumeRegionFilterSet = volumeRegionSet
            , printVolumeList = orderedVolumeList
            , volumeDict = volumeDict
            , volumeStatus = ""
            , volumesToRemove = Set.empty
          }
        , Cmd.none
        )


makeVolumeSorterHelpers ( ( account, region ), regionVolList ) =
    List.map (makeVolumeSorterHelper account region) regionVolList.payload.volumes


makeVolumeSorterHelper account region volume =
    VolumeSorterHelper account region volume


makeOrderedVolumeList model printVolumeList =
    case model.volumeSort of
        NoVolumeSort ->
            printVolumeList

        VolumeId ->
            List.sortWith sortVolumesByVolumeId printVolumeList

        CreateTime ->
            List.sortWith sortVolumesByCreateTime printVolumeList

        VolumeSize ->
            List.sortWith sortVolumesByVolumeSize printVolumeList

        VolumeType ->
            List.sortWith sortVolumesByVolumeType printVolumeList

        Iops ->
            List.sortWith sortVolumesByIops printVolumeList

        State ->
            List.sortWith sortVolumesByState printVolumeList

        AvailabilityZone ->
            List.sortWith sortVolumesByAvailabilityZone printVolumeList

        VolumeAccount ->
            List.sortWith sortVolumesByAccount printVolumeList


sortVolumesByVolumeId firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.volume.volume_id secondVolumeHelper.volume.volume_id of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortVolumesByCreateTime firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.volume.create_time_string secondVolumeHelper.volume.create_time_string of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortVolumesByVolumeSize firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.volume.size secondVolumeHelper.volume.size of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortVolumesByVolumeType firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.volume.volume_type secondVolumeHelper.volume.volume_type of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortVolumesByIops firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.volume.iops secondVolumeHelper.volume.iops of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortVolumesByState firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.volume.state secondVolumeHelper.volume.state of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortVolumesByAvailabilityZone firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.volume.availability_zone secondVolumeHelper.volume.availability_zone of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortVolumesByAccount firstVolumeHelper secondVolumeHelper =
    case compare firstVolumeHelper.account secondVolumeHelper.account of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortInstancesByInstanceId firstInstanceHelper secondInstanceHelper =
    case compare firstInstanceHelper.instance.instance_id secondInstanceHelper.instance.instance_id of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortInstancesByName firstInstanceHelper secondInstanceHelper =
    case compare firstInstanceHelper.instance.name secondInstanceHelper.instance.name of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


sortInstancesByAccount firstInstanceHelper secondInstanceHelper =
    case compare firstInstanceHelper.account secondInstanceHelper.account of
        GT ->
            GT

        EQ ->
            EQ

        LT ->
            LT


changeVpcInfo : Model -> VpcDecoder.RegVpcList -> ( Model, Cmd Msg )
changeVpcInfo model regionVpc =
    let
        vpcDict =
            Dict.insert regionVpc.region regionVpc.payload model.vpcDict

        vpcToRegionDict =
            Dict.union (Dict.fromList (List.map (vpcToRegionDictEntry regionVpc.region) regionVpc.payload.vpcs)) model.vpcToRegionDict

        vpcJson =
            List.map getVpcList (Dict.toList vpcDict)

        vpcList =
            List.concatMap getVpcs vpcJson

        smallVpcDict =
            makeSmallVpcDict vpcList

        vpcInstanceDict =
            case model.instanceList of
                [] ->
                    Dict.empty

                vpcList ->
                    makeVpcInstanceDict model
    in
        ( { model
            | vpcDict = vpcDict
            , vpcs = vpcJson
            , vpcList = vpcList
            , vpcInstanceDict = vpcInstanceDict
            , smallVpcDict = smallVpcDict
            , vpcToRegionDict = vpcToRegionDict
          }
        , Cmd.none
        )


vpcToRegionDictEntry region vpc =
    ( vpc.vpc_id, region )


makeSmallVpcDict vpcList =
    Dict.fromList (List.map vpcToDictEntry vpcList)


vpcToDictEntry vpc =
    ( vpc.vpc_id, vpc )


getVpcList : ( String, VpcDecoder.VpcList ) -> VpcDecoder.VpcList
getVpcList ( region, vpcList ) =
    vpcList


getVpcs vpcJson =
    vpcJson.vpcs


filterVolumesByEmpty showNonEmpty regionVolList volumeRegionFilterSet =
    List.concatMap (checkEmptyVolume showNonEmpty volumeRegionFilterSet) regionVolList


checkEmptyVolume showNonEmpty volumeRegionFilterSet volumeHelper =
    if (Set.member volumeHelper.region volumeRegionFilterSet) then
        if (not showNonEmpty) then
            if List.isEmpty volumeHelper.volume.attachments then
                [ volumeHelper ]
            else
                []
        else
            [ volumeHelper ]
    else
        []


filterVolumesByRegion volumeRegionFilterSet model volumeList =
    List.concatMap (checkVolume volumeRegionFilterSet model) volumeList


checkVolume volumeRegionFilterSet model volumeHelper =
    case Set.member volumeHelper.region volumeRegionFilterSet of
        True ->
            if model.showNonEmptyVolumes then
                [ volumeHelper ]
            else if List.isEmpty volumeHelper.volume.attachments then
                [ volumeHelper ]
            else
                []

        False ->
            []


filterInstances instanceRegionFilterSet instanceList =
    List.concatMap (checkInstance instanceRegionFilterSet) instanceList


checkInstance instanceRegionFilterSet instanceHelper =
    case Set.member instanceHelper.region instanceRegionFilterSet of
        True ->
            [ instanceHelper ]

        False ->
            []



-- VIEW


dateToString : Date.Date -> String
dateToString date =
    Date.Format.format "%Y/%m/%d %H:%M" date


getVolumeTuple : VolumeDecoder.Volume -> ( VolumeDecoder.Volume, List String )
getVolumeTuple volume =
    let
        ids =
            List.map getInstanceId volume.attachments
    in
        (,) volume ids


getInstanceId : VolumeDecoder.Attachment -> String
getInstanceId attachment =
    attachment.instance_id


printTotalDisplay model =
    [ table [ class "VolumesAndInstancesTable table table-bordered table-hover table-striped" ]
        [ thead []
            [ tr []
                [ th [] []
                , th [] [ text "Instances" ]
                , th [] [ text "Volumes" ]
                , th [] [ text "Unattached Volumes" ]
                , th [] [ text "Multiply-attached Volumes" ]
                , th [] [ text "Unused Volumes" ]
                ]
            ]
        , tbody []
            [ tr []
                ([ th [] [ text "Total" ]
                 ]
                    ++ printDisplayRow model.volumeList model.instanceList
                )
            , tr []
                ([ th [] [ text "Selected Regions" ]
                 ]
                    ++ printDisplayRow model.printVolumeList model.printInstanceList
                )
            ]
        ]
    ]


printDisplayRow volumeList instanceList =
    [ td [] [ text (toString (List.length instanceList)) ]
    , td [] [ text (toString (List.length volumeList)) ]
    , td [] [ text (toString (getUnattachedVolumes volumeList)) ]
    , td [] [ text (toString (getMultiplyAttachedVolumes volumeList)) ]
    , td [] [ text (toString (getUnusedVolumes volumeList)) ]
    ]


getUnattachedVolumes volumeList =
    List.length (List.filterMap checkUnattachedVolume volumeList)


checkUnattachedVolume volumeHelper =
    case volumeHelper.volume.attachments of
        [] ->
            Just True

        [ attachments ] ->
            Nothing

        _ ->
            Just True


getTotalInstances model =
    List.length (model.instanceList)


getMultiplyAttachedVolumes volumeList =
    List.length (List.filterMap checkMultiplyAttachedVolume volumeList)


checkMultiplyAttachedVolume volumeHelper =
    case (List.length volumeHelper.volume.attachments) of
        0 ->
            Nothing

        1 ->
            Nothing

        _ ->
            Just True


getUnusedVolumes volumeList =
    List.length (List.filterMap checkUnusedVolume volumeList)


printInstanceTable model =
    [ table [ class "InstanceTable table table-bordered table-striped table-hover" ]
        [ thead [] printInstanceTableHeaders
        , tbody []
            (model.printInstanceList
                |> List.map (printInstanceTableRow model)
            )
        ]
    ]


printInstanceTableHeaders =
    [ tr []
        [ th [] [ text "Instance Id", span [ onClick SortInstanceByInstanceId, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
        , th [] [ text "Account", span [ onClick SortInstanceByAccount, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
        , th [] [ text "Name", span [ onClick SortInstanceByName, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
        , th [] [ text "Availability Zone" ]
        , th [] [ text "Block Device Volume Ids (names)" ]
        , th [] [ text "Attachment Statuses" ]
        , th [] [ text "Attachments Delete on Termination" ]
        , th [] [ text "Attach Times (YYYY/MM/DD HH:MM)" ]
        ]
    ]


printInstanceTableRow model instanceHelper =
    tr []
        [ td [ id ("instance_table_" ++ instanceHelper.instance.instance_id) ] [ text (instanceHelper.instance.instance_id) ]
        , td [] [ text instanceHelper.account ]
        , td [] [ text instanceHelper.instance.name ]
        , td [] [ text instanceHelper.instance.placement.availability_zone ]
        , td [] [ ul [ class "TableList" ] (List.map printBlockDeviceIdentifiers instanceHelper.instance.block_device_mappings) ]
        , td [] [ ul [ class "TableList" ] (List.map printAttachmentStatus instanceHelper.instance.network_interfaces) ]
        , td [] [ ul [ class "TableList" ] (List.map printAttachmentDeleteOnTermination instanceHelper.instance.network_interfaces) ]
        , td [] [ ul [ class "TableList" ] (List.map printAttachmentCreationTime instanceHelper.instance.network_interfaces) ]
        ]


getNameFromInstanceTag tag =
    case tag.key of
        "Name" ->
            " (" ++ tag.value ++ ")"

        _ ->
            ""


printAttachmentCreationTime network_interface =
    li [] [ text (dateToString network_interface.attachment.attach_time) ]


printAttachmentStatus network_interface =
    li [] [ text network_interface.attachment.status ]


printAttachmentDeleteOnTermination network_interface =
    li [] [ text (toString network_interface.attachment.delete_on_termination) ]


printBlockDeviceIdentifiers device =
    li [] [ text (device.ebs.volume_id ++ " (" ++ device.device_name ++ ")") ]


printVolumeTableRow model volumeHelper =
    [ tr []
        [ td [] [ text volumeHelper.volume.volume_id ]
        , td [] [ text volumeHelper.account ]
        , td [] [ text volumeHelper.volume.availability_zone ]
        , printInstanceEntry volumeHelper
        , td [] [ text (dateToString volumeHelper.volume.create_time) ]
        , printElement volumeHelper.volume.size
        , td [] [ text volumeHelper.volume.volume_type ]
        , printElement volumeHelper.volume.iops
        , td [] [ text volumeHelper.volume.state ]
        ]
    ]


printElement element =
    td [] [ text (toString element) ]


printVolumeTableHeaders =
    thead []
        [ tr []
            [ th [] [ text "Volume Id", span [ onClick SortByVolumeId, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
            , th [] [ text "Account", span [ onClick SortVolumeByAccount, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
            , th [] [ text "Availability Zone", span [ onClick SortVolumeByAvailabilityZone, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
            , th [] [ text "Instance Ids" ]
            , th [] [ text "Create Time (YYYY/MM/DD HH:MM)", span [ onClick SortByCreateTime, class "glyphicon glyphicon-sort-by-order" ] [] ]
            , th [] [ text "Volume Size", span [ onClick SortByVolumeSize, class "glyphicon glyphicon-sort-by-order" ] [] ]
            , th [] [ text "Volume Type", span [ onClick SortByVolumeType, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
            , th [] [ text "Iops", span [ onClick SortByIops, class "glyphicon glyphicon-sort-by-order" ] [] ]
            , th [] [ text "State", span [ onClick SortByState, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
            ]
        ]


printInstanceId attachment =
    li [] [ text attachment.instance_id ]


printInstanceEntry volumeHelper =
    case volumeHelper.volume.attachments of
        [] ->
            td [] [ button [ onClick (RemoveVolume (Info "volume" volumeHelper.volume.volume_id volumeHelper.region volumeHelper.account)), class "btn btn-danger" ] [ text "Remove Volume" ] ]

        [ attachments ] ->
            td [] [ ul [ class "TableList" ] (List.map printInstanceId volumeHelper.volume.attachments) ]

        _ ->
            td [ class "Error" ] [ text "Error: Attachment format not recognized." ]


getAttachments volumeHelper =
    volumeHelper.volume.attachments


printVolumeTable model =
    [ table [ class "table table-striped table-bordered table-hover VolumeTable" ]
        [ printVolumeTableHeaders
        , tbody [] (List.concatMap (printVolumeTableRow model) (model.printVolumeList))
        ]
    ]


checkUnusedVolume volumeHelper =
    case volumeHelper.volume.state of
        "in-use" ->
            Nothing

        _ ->
            Just True


getRegions volumes =
    getRegion (List.head volumes)


getRegion volume =
    case volume of
        Just realVolume ->
            realVolume.availability_zone

        Nothing ->
            "No volumes to display"


printVolumeFilters model =
    (List.map (printVolumeCheckbox model) (Set.toList model.volumeRegionSet))


printVolumeCheckbox model region =
    let
        previouslyChecked =
            case Dict.get region model.volumeFiltersChecked of
                Nothing ->
                    True

                Just value ->
                    value
    in
        label [ class "FilterCheckbox" ]
            [ br [] []
            , input [ type' "checkbox", checked previouslyChecked, onCheck (FilterVolumeByRegion region) ] []
            , text region
            ]


printInstanceFilters model =
    (List.map (printInstanceCheckbox model) (Set.toList model.instanceRegionSet))


printInstanceCheckbox model region =
    let
        previouslyChecked =
            case Dict.get region model.instanceFiltersChecked of
                Nothing ->
                    True

                Just value ->
                    value
    in
        label [ class "FilterCheckbox" ]
            [ br [] []
            , input [ type' "checkbox", checked previouslyChecked, onCheck (FilterInstanceByRegion region) ] []
            , text region
            ]


printValue region =
    li [] [ text (region ++ " ") ]


printContent model =
    case model.display of
        InstancesAndVolumes ->
            printVolumesAndInstances model

        Vpcs ->
            printVpcs model

        Accounts ->
            printAccounts model


printAccounts model =
    [ div [ id "Accounts" ]
        [ text "Accounts"
        , div [ id "AccountStatus" ] [ text model.accountStatus ]
        , ul []
            ((List.concatMap printAccountNames model.accountsJson.accounts))
        , ul [ class "NewAccount" ]
            [ li [ onClick PromptNewAccount, class "AddAccount" ] [ span [ onClick PromptNewAccount, class "glyphicon glyphicon-plus-sign" ] [], text " Add Account" ] ]
        , model.newAccountPrompt
        ]
    ]


printAccountNames account =
    case account.active of
        True ->
            [ li [] [ text account.account_name ] ]

        False ->
            []


printVpcs model =
    [ div [ class "VpcTableSection" ]
        [ div [ class "Title" ] [ text "VPCs" ]
        , div [ class "Status" ] [ text model.vpcStatus ]
        , makeVpcTable model
        ]
    ]


makeVpcTable model =
    table [ class "table table-bordered table-striped table-hover", id "VpcTable" ]
        [ thead []
            [ tr []
                [ th []
                    [ text "VPC Id", span [ onClick SortVpcById, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
                , th []
                    [ text "Name", span [ onClick SortVpcByName, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
                , th [] [ text "Account", span [ onClick SortVpcByAccount, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
                , th [] [ text "Region", span [ onClick SortVpcByRegion, class "glyphicon glyphicon-sort-by-alphabet" ] [] ]
                , th [] [ text "Current Servers" ]
                , th [] [ text "Total Servers", span [ onClick SortVpcByTotalNumServers, class "glyphicon glyphicon-sort-by-order" ] [] ]
                , th [] [ text "First Seen", span [ onClick SortVpcByFirstSeen, class "glyphicon glyphicon-sort-by-order" ] [] ]
                , th [] [ text "First Seen w/ Servers", span [ onClick SortVpcByFirstSeenWithServers, class "glyphicon glyphicon-sort-by-order" ] [] ]
                , th [] [ text "Last Seen", span [ onClick SortVpcByLastSeen, class "glyphicon glyphicon-sort-by-order" ] [] ]
                , th [] [ text "Last Seen w/ Servers", span [ onClick SortVpcByLastSeenWithServers, class "glyphicon glyphicon-sort-by-order" ] [] ]
                ]
            ]
        , tbody [] (List.concatMap (makeVpcTableRow model model.vpcData) model.printVpcList)
        ]


makeVpcTableRow model vpcData vpc =
    let
        removeVpcsButton =
            case List.length vpc.current_servers of
                0 ->
                    span [ onClick (RemoveVpc (Info "vpc" vpc.vpc_id vpc.region vpc.account)), class ("glyphicon glyphicon-trash icon-enabled") ] []

                _ ->
                    span [ class ("glyphicon glyphicon-trash icon-disabled") ] []

        rowClass =
            case vpc.last_seen_with_servers of
                "not_seen" ->
                    "HighlightedRow"

                _ ->
                    ""
    in
        [ tr [ class rowClass ]
            [ td [ class "LongRow", id vpc.vpc_id ]
                [ text (vpc.vpc_id)
                , removeVpcsButton
                ]
            , td [] [ text vpc.name ]
            , td [] [ text vpc.account ]
            , td [] [ text vpc.region ]
            , td [ class "ReducedWidth" ]
                [ text (toString (List.length vpc.current_servers))
                , ul [] (List.map listVpcInstances vpc.current_servers)
                ]
            , td [] [ text (toString vpc.total_num_servers) ]
            , td [] [ text (printDate model.currentTime vpc.first_seen) ]
            , td [] [ text (printDate model.currentTime vpc.first_seen_with_servers) ]
            , td [] [ text (printDate model.currentTime vpc.last_seen) ]
            , td [] [ text (printDate model.currentTime vpc.last_seen_with_servers) ]
            ]
        ]


printDate currentTime seen =
    case (Date.fromString seen) of
        Ok convertedDate ->
            previousTimeToString currentTime convertedDate

        Err _ ->
            "Not seen"


previousTimeToString currentTime previousTime =
    let
        diffYears =
            DMath.diff DMath.Year previousTime currentTime

        diffMonths =
            DMath.diff DMath.Month previousTime currentTime

        diffWeeks =
            DMath.diff DMath.Week previousTime currentTime

        diffDays =
            DMath.diff DMath.Day previousTime currentTime

        diffHours =
            DMath.diff DMath.Hour previousTime currentTime

        diffMinutes =
            DMath.diff DMath.Minute previousTime currentTime
    in
        if diffYears > 1 then
            ((toString diffYears) ++ " years ago")
        else if diffYears == 1 then
            "1 year ago"
        else if diffMonths > 1 then
            ((toString diffMonths) ++ " months ago")
        else if diffMonths == 1 then
            "1 month ago"
        else if diffWeeks > 1 then
            ((toString diffWeeks) ++ " weeks ago")
        else if diffWeeks == 1 then
            "1 week ago"
        else if diffDays > 1 then
            ((toString diffDays) ++ " days ago")
        else if diffDays == 1 then
            "1 day ago"
        else if diffHours > 1 then
            ((toString diffHours) ++ " hours ago")
        else if diffHours == 1 then
            "1 hour ago"
        else if diffMinutes > 1 then
            ((toString diffMinutes) ++ " minutes ago")
        else if diffMinutes == 1 then
            "1 minute ago"
        else
            "A few seconds ago"


getAccountVpcs account =
    List.concatMap getRegionVpcs account.regions


getRegionVpcs region =
    region.vpcs


listVpcInstances instance =
    li [] [ text instance.instance_id ]


makeInstanceVpcTable model =
    table [ class "table table-bordered table-striped table-hover" ]
        [ thead []
            [ th [] [ text "Instance Id" ]
            , th [] [ text "Instance State" ]
            , th [] [ text "VPC Id" ]
            ]
        , tbody [] (List.map makeInstanceVpcTableRow model.instanceList)
        ]


makeInstanceVpcTableRow instance =
    let
        state =
            case (instance.state.name == "stopped" && instance.vpc_id == "") of
                True ->
                    "Invalid"

                False ->
                    "Valid"
    in
        tr [ class state ]
            [ td [] [ text instance.instance_id ]
            , td [] [ text instance.state.name ]
            , td [] [ text instance.vpc_id ]
            ]


makeTabSection model =
    let
        volumesAndInstancesClass =
            case model.activeTab of
                VolumesAndInstancesTab ->
                    "active"

                _ ->
                    ""

        vpcClass =
            case model.activeTab of
                VpcTab ->
                    "active"

                _ ->
                    ""

        accountsClass =
            case model.activeTab of
                AccountsTab ->
                    "active"

                _ ->
                    ""
    in
        [ div [ class "collapse navbar-collapse" ]
            [ ul [ class "nav navbar-nav" ]
                [ li [ class accountsClass ] [ a [ class "TabButton", onClick DisplayAccounts ] [ text "Accounts" ] ]
                , li [ class volumesAndInstancesClass ] [ a [ class "TabButton", onClick DisplayVAndI ] [ text "Volumes and Instances" ] ]
                , li [ class vpcClass ] [ a [ class "TabButton", onClick DisplayVpc ] [ text "VPCs" ] ]
                ]
            ]
        ]


printVolumesAndInstances model =
    [ div [ class "TotalDisplay" ] (printTotalDisplay model)
    , div [ class "Title" ] [ text "Instances" ]
    ]
        ++ (printInstanceFilters model)
        ++ [ div [ class "InstanceSection" ] (printInstanceTable model)
             --, div [] ((model.printInstanceList) |> (List.concatMap (printInstance model)))
           , div [ style [ ( "clear", "both" ) ] ] []
           , div [ class "Title" ] [ text "Volumes" ]
           ]
        ++ (printVolumeFilters model)
        ++ [ label [ class "FilterCheckbox" ]
                [ br [] []
                , input [ type' "checkbox", checked model.showNonEmptyVolumes, onCheck FilterVolumeByEmpty ] []
                , text "Show Nonempty Volumes"
                ]
           , div [ class "VolumeSection" ]
                ([ div [] [ text model.volumeStatus ] ]
                    ++ (printVolumeTable model)
                )
           ]


view : Model -> Html Msg
view model =
    div [ id "all" ]
        [ div [ id "Title" ] [ h1 [ class "header" ] [ text "AWS Json Reader" ] ]
        , div [ id "LeftBar" ] []
        , div [ id "RightBar" ] []
        , nav [ id "TabSection", class "navbar navbar-inverse" ] (makeTabSection model)
        , div [ id "content" ]
            (printContent model)
        , Dialog.view
            (if model.showVpcDialog then
                Just (vpcDialogConfig model)
             else
                Nothing
            )
        , Dialog.view
            (if model.showVolumeDialog then
                Just (volumeDialogConfig model)
             else
                Nothing
            )
        ]


vpcDialogConfig : Model -> Dialog.Config Msg
vpcDialogConfig model =
    { closeMessage = Nothing
    , header = Just (h3 [] [ text "Confirmation" ])
    , body =
        Just
            (div []
                [ text ("Are you sure you want to delete this vpc?")
                , br [] []
                , text ("Vpc Id: " ++ model.vpcToDelete.id)
                , br [] []
                , text ("Region: " ++ model.vpcToDelete.region)
                ]
            )
    , footer =
        Just
            (div []
                [ button [ class "btn btn-danger", onClick (ConfirmVpcRemoval model.vpcToDelete) ] [ text "Yes" ]
                , button [ class "btn btn-secondary", onClick CancelVpcRemoval ] [ text "No" ]
                ]
            )
    }


volumeDialogConfig : Model -> Dialog.Config Msg
volumeDialogConfig model =
    { closeMessage = Nothing
    , header = Just (h3 [] [ text "Confirmation" ])
    , body =
        Just
            (div []
                [ text ("Are you sure you want to delete this volume?")
                , br [] []
                , text ("Volume Id: " ++ model.volumeToDelete.id)
                , br [] []
                , text ("Region: " ++ model.volumeToDelete.region)
                ]
            )
    , footer =
        Just
            (div []
                [ button [ class "btn btn-danger", onClick (ConfirmVolumeRemoval model.volumeToDelete) ] [ text "Yes" ]
                , button [ class "btn btn-secondary", onClick CancelVolumeRemoval ] [ text "No" ]
                ]
            )
    }



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ (WebSocket.listen model.websocketAddress NewMessage)
        , (Time.every Time.second Tick)
        ]



-- HTTP


getRegionsFromServer : Cmd Msg
getRegionsFromServer =
    let
        url =
            "http://127.0.0.1:8080/api/regions"
    in
        Task.perform GetRegionsFail GetRegionsSucceed (Http.get (RegionListDecoder.decodeRegionList) url)
