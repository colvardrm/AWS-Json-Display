module InstanceJson exposing (..)

import Html.App as App
import Html exposing (..)
import WebSocket


main =
    App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


type alias Model =
    { json : String
    }


init : ( Model, Cmd Msg )
init =
    ( Model "", Cmd.none )


type Msg
    = ReceiveJson String
    | Refresh


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReceiveJson newJson ->
            ( { model | json = newJson }, Cmd.none )

        Refresh ->
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    WebSocket.listen "ws://127.0.0.1:8080/us-east-1" ReceiveJson


view : Model -> Html Msg
view model =
    div [] []


json : String
json =
    """{\x0D
    "Reservations": [\x0D
        {\x0D
            "OwnerId": "375321850564",\x0D
            "ReservationId": "r-4e6b6aef",\x0D
            "Groups": [],\x0D
            "Instances": [\x0D
                {\x0D
                    "Monitoring": {\x0D
                        "State": "disabled"\x0D
                    },\x0D
                    "PublicDnsName": "ec2-54-229-22-163.eu-west-1.compute.amazonaws.com",\x0D
                    "State": {\x0D
                        "Code": 16,\x0D
                        "Name": "running"\x0D
                    },\x0D
                    "EbsOptimized": true,\x0D
                    "LaunchTime": "2016-04-09T07:18:50.000Z",\x0D
                    "PublicIpAddress": "54.229.22.163",\x0D
                    "PrivateIpAddress": "172.32.8.209",\x0D
                    "ProductCodes": [\x0D
                        {\x0D
                            "ProductCodeId": "6x5jmcajty9edm3f211pqjfn2",\x0D
                            "ProductCodeType": "marketplace"\x0D
                        }\x0D
                    ],\x0D
                    "VpcId": "vpc-df83c9ba",\x0D
                    "StateTransitionReason": null,\x0D
                    "InstanceId": "i-0beaf480",\x0D
                    "ImageId": "ami-b15ef8c2",\x0D
                    "PrivateDnsName": "ip-172-32-8-209.eu-west-1.compute.internal",\x0D
                    "KeyName": "LinuxEncoder",\x0D
                    "SecurityGroups": [\x0D
                        {\x0D
                            "GroupName": "GRIT Relay",\x0D
                            "GroupId": "sg-b82177dc"\x0D
                        }\x0D
                    ],\x0D
                    "ClientToken": "nmGXF1454409913768",\x0D
                    "SubnetId": "subnet-4793b630",\x0D
                    "InstanceType": "c4.xlarge",\x0D
                    "NetworkInterfaces": [\x0D
                        {\x0D
                            "Status": "in-use",\x0D
                            "SourceDestCheck": true,\x0D
                            "VpcId": "vpc-df83c9ba",\x0D
                            "Description": "Primary network interface",\x0D
                            "Association": {\x0D
                                "PublicIp": "54.229.22.163",\x0D
                                "PublicDnsName": "ec2-54-229-22-163.eu-west-1.compute.amazonaws.com",\x0D
                                "IpOwnerId": "375321850564"\x0D
                            },\x0D
                            "NetworkInterfaceId": "eni-341ef57f",\x0D
                            "PrivateIpAddresses": [\x0D
                                {\x0D
                                    "PrivateDnsName": "ip-172-32-8-209.eu-west-1.compute.internal",\x0D
                                    "Association": {\x0D
                                        "PublicIp": "54.229.22.163",\x0D
                                        "PublicDnsName": "ec2-54-229-22-163.eu-west-1.compute.amazonaws.com",\x0D
                                        "IpOwnerId": "375321850564"\x0D
                                    },\x0D
                                    "Primary": true,\x0D
                                    "PrivateIpAddress": "172.32.8.209"\x0D
                                }\x0D
                            ],\x0D
                            "PrivateDnsName": "ip-172-32-8-209.eu-west-1.compute.internal",\x0D
                            "Attachment": {\x0D
                                "Status": "attached",\x0D
                                "DeviceIndex": 0,\x0D
                                "DeleteOnTermination": true,\x0D
                                "AttachmentId": "eni-attach-0d74e9ea",\x0D
                                "AttachTime": "2016-02-02T10:45:14.000Z"\x0D
                            },\x0D
                            "Groups": [\x0D
                                {\x0D
                                    "GroupName": "GRIT Relay",\x0D
                                    "GroupId": "sg-b82177dc"\x0D
                                }\x0D
                            ],\x0D
                            "SubnetId": "subnet-4793b630",\x0D
                            "OwnerId": "375321850564",\x0D
                            "PrivateIpAddress": "172.32.8.209"\x0D
                        }\x0D
                    ],\x0D
                    "SourceDestCheck": true,\x0D
                    "Placement": {\x0D
                        "Tenancy": "default",\x0D
                        "GroupName": null,\x0D
                        "AvailabilityZone": "eu-west-1c"\x0D
                    },\x0D
                    "Hypervisor": "xen",\x0D
                    "BlockDeviceMappings": [\x0D
                        {\x0D
                            "DeviceName": "/dev/sda1",\x0D
                            "Ebs": {\x0D
                                "Status": "attached",\x0D
                                "DeleteOnTermination": true,\x0D
                                "VolumeId": "vol-79cee78a",\x0D
                                "AttachTime": "2016-02-02T10:45:18.000Z"\x0D
                            }\x0D
                        }\x0D
                    ],\x0D
                    "Architecture": "x86_64",\x0D
                    "RootDeviceType": "ebs",\x0D
                    "IamInstanceProfile": {\x0D
                        "Id": "AIPAJO47X773IAG3EYVR2",\x0D
                        "Arn": "arn:aws:iam::375321850564:instance-profile/grit_relay"\x0D
                    },\x0D
                    "RootDeviceName": "/dev/sda1",\x0D
                    "VirtualizationType": "hvm",\x0D
                    "Tags": [\x0D
                        {\x0D
                            "Value": "PRO GRIT Relay EU-West",\x0D
                            "Key": "Name"\x0D
                        }\x0D
                    ],\x0D
                    "AmiLaunchIndex": 0\x0D
                }\x0D
            ]\x0D
        },\x0D
        {\x0D
            "OwnerId": "375321850564",\x0D
            "ReservationId": "r-93b84d3e",\x0D
            "Groups": [],\x0D
            "Instances": [\x0D
                {\x0D
                    "Monitoring": {\x0D
                        "State": "disabled"\x0D
                    },\x0D
                    "PublicDnsName": null,\x0D
                    "KernelId": "aki-71665e05",\x0D
                    "State": {\x0D
                        "Code": 80,\x0D
                        "Name": "stopped"\x0D
                    },\x0D
                    "EbsOptimized": false,\x0D
                    "LaunchTime": "2015-10-09T20:36:53.000Z",\x0D
                    "PrivateIpAddress": "172.31.37.31",\x0D
                    "ProductCodes": [],\x0D
                    "VpcId": "vpc-2f9f8847",\x0D
                    "StateTransitionReason": null,\x0D
                    "InstanceId": "i-a5c6571c",\x0D
                    "ImageId": "ami-cf5d6cb8",\x0D
                    "PrivateDnsName": "ip-172-31-37-31.eu-west-1.compute.internal",\x0D
                    "KeyName": "VEE-PRO1-EU-WEST",\x0D
                    "SecurityGroups": [\x0D
                        {\x0D
                            "GroupName": "vee_manager",\x0D
                            "GroupId": "sg-b1e4fed3"\x0D
                        }\x0D
                    ],\x0D
                    "ClientToken": "FhCfZ1444423013306",\x0D
                    "SubnetId": "subnet-219f8849",\x0D
                    "InstanceType": "m1.medium",\x0D
                    "NetworkInterfaces": [\x0D
                        {\x0D
                            "Status": "in-use",\x0D
                            "SourceDestCheck": true,\x0D
                            "VpcId": "vpc-2f9f8847",\x0D
                            "Description": null,\x0D
                            "NetworkInterfaceId": "eni-b6546fff",\x0D
                            "PrivateIpAddresses": [\x0D
                                {\x0D
                                    "PrivateDnsName": "ip-172-31-37-31.eu-west-1.compute.internal",\x0D
                                    "Primary": true,\x0D
                                    "PrivateIpAddress": "172.31.37.31"\x0D
                                }\x0D
                            ],\x0D
                            "PrivateDnsName": "ip-172-31-37-31.eu-west-1.compute.internal",\x0D
                            "Attachment": {\x0D
                                "Status": "attached",\x0D
                                "DeviceIndex": 0,\x0D
                                "DeleteOnTermination": true,\x0D
                                "AttachmentId": "eni-attach-fbf34ad7",\x0D
                                "AttachTime": "2015-10-09T20:36:53.000Z"\x0D
                            },\x0D
                            "Groups": [\x0D
                                {\x0D
                                    "GroupName": "vee_manager",\x0D
                                    "GroupId": "sg-b1e4fed3"\x0D
                                }\x0D
                            ],\x0D
                            "SubnetId": "subnet-219f8849",\x0D
                            "OwnerId": "375321850564",\x0D
                            "PrivateIpAddress": "172.31.37.31"\x0D
                        }\x0D
                    ],\x0D
                    "SourceDestCheck": true,\x0D
                    "Placement": {\x0D
                        "Tenancy": "default",\x0D
                        "GroupName": null,\x0D
                        "AvailabilityZone": "eu-west-1c"\x0D
                    },\x0D
                    "Hypervisor": "xen",\x0D
                    "BlockDeviceMappings": [\x0D
                        {\x0D
                            "DeviceName": "/dev/sda1",\x0D
                            "Ebs": {\x0D
                                "Status": "attached",\x0D
                                "DeleteOnTermination": true,\x0D
                                "VolumeId": "vol-45655eb5",\x0D
                                "AttachTime": "2015-10-09T20:36:56.000Z"\x0D
                            }\x0D
                        }\x0D
                    ],\x0D
                    "Architecture": "x86_64",\x0D
                    "StateReason": {\x0D
                        "Message": "Client.InstanceInitiatedShutdown: Instance initiated shutdown",\x0D
                        "Code": "Client.InstanceInitiatedShutdown"\x0D
                    },\x0D
                    "IamInstanceProfile": {\x0D
                        "Id": "AIPAJBHZIV6N3CY2Z65G4",\x0D
                        "Arn": "arn:aws:iam::375321850564:instance-profile/vee_manager"\x0D
                    },\x0D
                    "RootDeviceName": "/dev/sda1",\x0D
                    "VirtualizationType": "paravirtual",\x0D
                    "RootDeviceType": "ebs",\x0D
                    "Tags": [\x0D
                        {\x0D
                            "Value": "old VEE Live Manager (IAM)",\x0D
                            "Key": "Name"\x0D
                        }\x0D
                    ],\x0D
                    "AmiLaunchIndex": 0\x0D\x0D
                }\x0D\x0D
            ]\x0D\x0D
        },\x0D\x0D
        {\x0D\x0D
            "OwnerId": "375321850564",\x0D\x0D
            "ReservationId": "r-954e642c",\x0D\x0D
            "Groups": [],\x0D\x0D
            "Instances": [\x0D\x0D
                {\x0D\x0D
                    "Monitoring": {\x0D\x0D
                        "State": "disabled"\x0D\x0D
                    },\x0D\x0D
                    "PublicDnsName": "ec2-54-229-58-229.eu-west-1.compute.amazonaws.com",\x0D\x0D
                    "State": {\x0D\x0D
                        "Code": 16,\x0D\x0D
                        "Name": "running"\x0D\x0D
                    },\x0D\x0D
                    "EbsOptimized": false,\x0D\x0D
                    "LaunchTime": "2016-05-27T11:01:48.000Z",\x0D\x0D
                    "PublicIpAddress": "54.229.58.229",\x0D\x0D
                    "PrivateIpAddress": "172.32.9.111",\x0D\x0D
                    "ProductCodes": [\x0D\x0D
                        {\x0D\x0D
                            "ProductCodeId": "6x5jmcajty9edm3f211pqjfn2",\x0D\x0D
                            "ProductCodeType": "marketplace"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "VpcId": "vpc-353f2b50",\x0D\x0D
                    "StateTransitionReason": null,\x0D\x0D
                    "InstanceId": "i-c95c1743",\x0D\x0D
                    "ImageId": "ami-fe83038d",\x0D\x0D
                    "PrivateDnsName": "ip-172-32-9-111.eu-west-1.compute.internal",\x0D\x0D
                    "SecurityGroups": [\x0D\x0D
                        {\x0D\x0D
                            "GroupName": "default",\x0D\x0D
                            "GroupId": "sg-4b1a0e2f"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "ClientToken": "98070-346844-1464",\x0D\x0D
                    "SubnetId": "subnet-c3db3cb5",\x0D\x0D
                    "InstanceType": "c4.large",\x0D\x0D
                    "NetworkInterfaces": [\x0D\x0D
                        {\x0D\x0D
                            "Status": "in-use",\x0D\x0D
                            "SourceDestCheck": true,\x0D\x0D
                            "VpcId": "vpc-353f2b50",\x0D\x0D
                            "Description": null,\x0D\x0D
                            "Association": {\x0D\x0D
                                "PublicIp": "54.229.58.229",\x0D\x0D
                                "PublicDnsName": "ec2-54-229-58-229.eu-west-1.compute.amazonaws.com",\x0D\x0D
                                "IpOwnerId": "amazon"\x0D\x0D
                            },\x0D\x0D
                            "NetworkInterfaceId": "eni-7e5e3634",\x0D\x0D
                            "PrivateIpAddresses": [\x0D\x0D
                                {\x0D\x0D
                                    "PrivateDnsName": "ip-172-32-9-111.eu-west-1.compute.internal",\x0D\x0D
                                    "Association": {\x0D\x0D
                                        "PublicIp": "54.229.58.229",\x0D\x0D
                                        "PublicDnsName": "ec2-54-229-58-229.eu-west-1.compute.amazonaws.com",\x0D\x0D
                                        "IpOwnerId": "amazon"\x0D\x0D
                                    },\x0D\x0D
                                    "Primary": true,\x0D\x0D
                                    "PrivateIpAddress": "172.32.9.111"\x0D\x0D
                                }\x0D\x0D
                            ],\x0D\x0D
                            "PrivateDnsName": "ip-172-32-9-111.eu-west-1.compute.internal",\x0D\x0D
                            "Attachment": {\x0D\x0D
                                "Status": "attached",\x0D\x0D
                                "DeviceIndex": 0,\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D
                                "AttachmentId": "eni-attach-2ffe29ea",\x0D\x0D
                                "AttachTime": "2016-05-27T11:01:48.000Z"\x0D\x0D
                            },\x0D\x0D
                            "Groups": [\x0D\x0D
                                {\x0D\x0D
                                    "GroupName": "default",\x0D\x0D
                                    "GroupId": "sg-4b1a0e2f"\x0D\x0D
                                }\x0D\x0D
                            ],\x0D\x0D
                            "SubnetId": "subnet-c3db3cb5",\x0D\x0D
                            "OwnerId": "375321850564",\x0D\x0D
                            "PrivateIpAddress": "172.32.9.111"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "SourceDestCheck": true,\x0D\x0D
                    "Placement": {\x0D\x0D
                        "Tenancy": "default",\x0D\x0D
                        "GroupName": null,\x0D\x0D
                        "AvailabilityZone": "eu-west-1c"\x0D\x0D
                    },\x0D\x0D
                    "Hypervisor": "xen",\x0D\x0D
                    "BlockDeviceMappings": [\x0D\x0D
                        {\x0D\x0D
                            "DeviceName": "/dev/sda1",\x0D\x0D
                            "Ebs": {\x0D\x0D
                                "Status": "attached",\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D
                                "VolumeId": "vol-20d6f9d2",\x0D\x0D
                                "AttachTime": "2016-05-27T11:01:48.000Z"\x0D\x0D
                            }\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "Architecture": "x86_64",\x0D\x0D
                    "RootDeviceType": "ebs",\x0D\x0D
                    "IamInstanceProfile": {\x0D\x0D
                        "Id": "AIPAIBJEZV7QMNZJ75LFK",\x0D\x0D
                        "Arn": "arn:aws:iam::375321850564:instance-profile/vee_encoder"\x0D\x0D
                    },\x0D\x0D
                    "RootDeviceName": "/dev/sda1",\x0D\x0D
                    "VirtualizationType": "hvm",\x0D\x0D
                    "AmiLaunchIndex": 0\x0D\x0D
                }\x0D\x0D
            ]\x0D\x0D
        },\x0D\x0D
        {\x0D\x0D
            "OwnerId": "375321850564",\x0D\x0D
            "ReservationId": "r-6776eec6",\x0D\x0D
            "Groups": [],\x0D\x0D
            "Instances": [\x0D\x0D
                {\x0D\x0D
                    "Monitoring": {\x0D\x0D
                        "State": "disabled"\x0D\x0D
                    },\x0D\x0D
                    "PublicDnsName": "ec2-54-229-22-168.eu-west-1.compute.amazonaws.com",\x0D\x0D
                    "KernelId": "aki-52a34525",\x0D\x0D
                    "State": {\x0D\x0D
                        "Code": 80,\x0D\x0D
                        "Name": "stopped"\x0D\x0D
                    },\x0D\x0D
                    "EbsOptimized": false,\x0D\x0D
                    "LaunchTime": "2015-11-14T07:38:00.000Z",\x0D\x0D
                    "PublicIpAddress": "54.229.22.168",\x0D\x0D
                    "PrivateIpAddress": "172.31.46.238",\x0D\x0D
                    "ProductCodes": [],\x0D\x0D
                    "VpcId": "vpc-2f9f8847",\x0D\x0D
                    "StateTransitionReason": "User initiated (2016-03-30 20:06:53 GMT)",\x0D\x0D
                    "InstanceId": "i-d4dcf26d",\x0D\x0D
                    "ImageId": "ami-57744520",\x0D\x0D
                    "PrivateDnsName": "ip-172-31-46-238.eu-west-1.compute.internal",\x0D\x0D
                    "KeyName": "LinuxEncoder",\x0D\x0D
                    "SecurityGroups": [\x0D\x0D
                        {\x0D\x0D
                            "GroupName": "vee_manager",\x0D\x0D
                            "GroupId": "sg-b1e4fed3"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "ClientToken": "jvdFO1447452574758",\x0D\x0D
                    "SubnetId": "subnet-219f8849",\x0D\x0D
                    "InstanceType": "c3.large",\x0D\x0D
                    "NetworkInterfaces": [\x0D\x0D
                        {\x0D\x0D
                            "Status": "in-use",\x0D\x0D
                            "SourceDestCheck": true,\x0D\x0D
                            "VpcId": "vpc-2f9f8847",\x0D\x0D
                            "Description": null,\x0D\x0D
                            "Association": {\x0D\x0D
                                "PublicIp": "54.229.22.168",\x0D\x0D
                                "PublicDnsName": "ec2-54-229-22-168.eu-west-1.compute.amazonaws.com",\x0D\x0D
                                "IpOwnerId": "375321850564"\x0D\x0D
                            },\x0D\x0D
                            "NetworkInterfaceId": "eni-3408d47c",\x0D\x0D
                            "PrivateIpAddresses": [\x0D\x0D
                                {\x0D\x0D
                                    "PrivateDnsName": "ip-172-31-46-238.eu-west-1.compute.internal",\x0D\x0D
                                    "Association": {\x0D\x0D
                                        "PublicIp": "54.229.22.168",\x0D\x0D
                                        "PublicDnsName": "ec2-54-229-22-168.eu-west-1.compute.amazonaws.com",\x0D\x0D
                                        "IpOwnerId": "375321850564"\x0D\x0D
                                    },\x0D\x0D
                                    "Primary": true,\x0D\x0D
                                    "PrivateIpAddress": "172.31.46.238"\x0D\x0D
                                }\x0D\x0D
                            ],\x0D\x0D
                            "PrivateDnsName": "ip-172-31-46-238.eu-west-1.compute.internal",\x0D\x0D
                            "Attachment": {\x0D\x0D
                                "Status": "attached",\x0D\x0D
                                "DeviceIndex": 0,\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D
                                "AttachmentId": "eni-attach-900b4ebc",\x0D\x0D
                                "AttachTime": "2015-11-13T22:09:35.000Z"\x0D\x0D
                            },\x0D\x0D
                            "Groups": [\x0D\x0D
                                {\x0D\x0D
                                    "GroupName": "vee_manager",\x0D\x0D
                                    "GroupId": "sg-b1e4fed3"\x0D\x0D
                                }\x0D\x0D
                            ],\x0D\x0D
                            "SubnetId": "subnet-219f8849",\x0D\x0D
                            "OwnerId": "375321850564",\x0D\x0D
                            "PrivateIpAddress": "172.31.46.238"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "SourceDestCheck": true,\x0D\x0D
                    "Placement": {\x0D\x0D
                        "Tenancy": "default",\x0D\x0D
                        "GroupName": null,\x0D\x0D
                        "AvailabilityZone": "eu-west-1c"\x0D\x0D
                    },\x0D\x0D
                    "Hypervisor": "xen",\x0D\x0D
                    "BlockDeviceMappings": [\x0D\x0D
                        {\x0D\x0D
                            "DeviceName": "/dev/sda1",\x0D\x0D
                            "Ebs": {\x0D\x0D
                                "Status": "attached",\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D
                                "VolumeId": "vol-1473b0e7",\x0D\x0D
                                "AttachTime": "2015-11-13T22:09:38.000Z"\x0D\x0D
                            }\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "Architecture": "x86_64",\x0D\x0D
                    "StateReason": {\x0D\x0D
                        "Message": "Client.UserInitiatedShutdown: User initiated shutdown",\x0D\x0D
                        "Code": "Client.UserInitiatedShutdown"\x0D\x0D
                    },\x0D\x0D
                    "IamInstanceProfile": {\x0D\x0D
                        "Id": "AIPAIBJEZV7QMNZJ75LFK",\x0D\x0D
                        "Arn": "arn:aws:iam::375321850564:instance-profile/vee_encoder"\x0D\x0D
                    },\x0D\x0D
                    "RootDeviceName": "/dev/sda1",\x0D\x0D
                    "VirtualizationType": "paravirtual",\x0D\x0D
                    "RootDeviceType": "ebs",\x0D\x0D
                    "Tags": [\x0D\x0D
                        {\x0D\x0D
                            "Value": "VEE Live S3 Bridge",\x0D\x0D
                            "Key": "Name"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "AmiLaunchIndex": 0\x0D\x0D
                }\x0D\x0D
            ]\x0D\x0D
        },\x0D\x0D
        {\x0D\x0D
            "OwnerId": "375321850564",\x0D\x0D
            "ReservationId": "r-bd4c6e10",\x0D\x0D
            "Groups": [],\x0D\x0D
            "Instances": [\x0D\x0D
                {\x0D\x0D
                    "Monitoring": {\x0D\x0D
                        "State": "disabled"\x0D\x0D
                    },\x0D\x0D
                    "PublicDnsName": "ec2-54-194-202-98.eu-west-1.compute.amazonaws.com",\x0D\x0D
                    "KernelId": "aki-71665e05",\x0D\x0D
                    "State": {\x0D\x0D
                        "Code": 80,\x0D\x0D
                        "Name": "stopped"\x0D\x0D
                    },\x0D\x0D
                    "EbsOptimized": false,\x0D\x0D
                    "LaunchTime": "2015-11-14T07:38:08.000Z",\x0D\x0D
                    "PublicIpAddress": "54.194.202.98",\x0D\x0D
                    "PrivateIpAddress": "172.31.28.34",\x0D\x0D
                    "ProductCodes": [],\x0D\x0D
                    "VpcId": "vpc-2f9f8847",\x0D\x0D
                    "StateTransitionReason": "User initiated (2016-03-30 20:06:53 GMT)",\x0D\x0D
                    "InstanceId": "i-4cc338f5",\x0D\x0D
                    "ImageId": "ami-83c810f0",\x0D\x0D
                    "PrivateDnsName": "ip-172-31-28-34.eu-west-1.compute.internal",\x0D\x0D
                    "KeyName": "LinuxEncoder",\x0D\x0D
                    "SecurityGroups": [\x0D\x0D
                        {\x0D\x0D
                            "GroupName": "vee_manager",\x0D\x0D
                            "GroupId": "sg-b1e4fed3"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "ClientToken": "mPiSb1447127511507",\x0D\x0D
                    "SubnetId": "subnet-209f8848",\x0D\x0D
                    "InstanceType": "c3.large",\x0D\x0D
                    "NetworkInterfaces": [\x0D\x0D
                        {\x0D\x0D
                            "Status": "in-use",\x0D\x0D
                            "SourceDestCheck": true,\x0D\x0D
                            "VpcId": "vpc-2f9f8847",\x0D\x0D
                            "Description": null,\x0D\x0D
                            "Association": {\x0D\x0D
                                "PublicIp": "54.194.202.98",\x0D\x0D
                                "PublicDnsName": "ec2-54-194-202-98.eu-west-1.compute.amazonaws.com",\x0D\x0D
                                "IpOwnerId": "375321850564"\x0D\x0D
                            },\x0D\x0D
                            "NetworkInterfaceId": "eni-4d46572a",\x0D\x0D
                            "PrivateIpAddresses": [\x0D\x0D
                                {\x0D\x0D
                                    "PrivateDnsName": "ip-172-31-28-34.eu-west-1.compute.internal",\x0D\x0D
                                    "Association": {\x0D\x0D
                                        "PublicIp": "54.194.202.98",\x0D\x0D
                                        "PublicDnsName": "ec2-54-194-202-98.eu-west-1.compute.amazonaws.com",\x0D\x0D
                                        "IpOwnerId": "375321850564"\x0D\x0D
                                    },\x0D\x0D
                                    "Primary": true,\x0D\x0D
                                    "PrivateIpAddress": "172.31.28.34"\x0D\x0D
                                }\x0D\x0D
                            ],\x0D\x0D
                            "PrivateDnsName": "ip-172-31-28-34.eu-west-1.compute.internal",\x0D\x0D
                            "Attachment": {\x0D\x0D
                                "Status": "attached",\x0D\x0D
                                "DeviceIndex": 0,\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D
                                "AttachmentId": "eni-attach-bcd5b093",\x0D\x0D
                                "AttachTime": "2015-11-10T03:51:52.000Z"\x0D\x0D
                            },\x0D\x0D
                            "Groups": [\x0D\x0D
                                {\x0D\x0D
                                    "GroupName": "vee_manager",\x0D\x0D
                                    "GroupId": "sg-b1e4fed3"\x0D\x0D
                                }\x0D\x0D
                            ],\x0D\x0D
                            "SubnetId": "subnet-209f8848",\x0D\x0D
                            "OwnerId": "375321850564",\x0D\x0D
                            "PrivateIpAddress": "172.31.28.34"\x0D\x0D
                        }\x0D\x0D
                    ],\x0D\x0D
                    "SourceDestCheck": true,\x0D\x0D
                    "Placement": {\x0D\x0D
                        "Tenancy": "default",\x0D\x0D
                        "GroupName": null,\x0D\x0D
                        "AvailabilityZone": "eu-west-1b"\x0D\x0D
                    },\x0D\x0D
                    "Hypervisor": "xen",\x0D\x0D\x0D\x0D
                    "BlockDeviceMappings": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "DeviceName": "/dev/sda1",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Ebs": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "Status": "attached",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "VolumeId": "vol-8d43034e",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "AttachTime": "2015-11-10T03:51:54.000Z"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Architecture": "x86_64",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "StateReason": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Message": "Client.UserInitiatedShutdown: User initiated shutdown",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Code": "Client.UserInitiatedShutdown"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "IamInstanceProfile": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Id": "AIPAJBHZIV6N3CY2Z65G4",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Arn": "arn:aws:iam::375321850564:instance-profile/vee_manager"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "RootDeviceName": "/dev/sda1",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "VirtualizationType": "paravirtual",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "RootDeviceType": "ebs",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Tags": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Value": "VEE Live Manager (IAM)",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Key": "Name"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "AmiLaunchIndex": 0\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            ]\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
        },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "OwnerId": "375321850564",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "ReservationId": "r-42dfa9e3",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "Groups": [],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "Instances": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Monitoring": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "State": "disabled"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "PublicDnsName": "ec2-52-19-172-72.eu-west-1.compute.amazonaws.com",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "State": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Code": 16,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Name": "running"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "EbsOptimized": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "LaunchTime": "2015-11-30T17:15:20.000Z",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "PublicIpAddress": "52.19.172.72",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "PrivateIpAddress": "172.32.8.165",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "ProductCodes": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "ProductCodeId": "6x5jmcajty9edm3f211pqjfn2",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "ProductCodeType": "marketplace"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "VpcId": "vpc-df83c9ba",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "StateTransitionReason": null,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "InstanceId": "i-40fdf4f9",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "ImageId": "ami-d652f6a5",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "PrivateDnsName": "ip-172-32-8-165.eu-west-1.compute.internal",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "KeyName": "LinuxEncoder",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "SecurityGroups": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "GroupName": "playlist_proxy",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "GroupId": "sg-8763f6e3"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "ClientToken": "rMdGa1448903719686",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "SubnetId": "subnet-4793b630",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "InstanceType": "c4.large",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "NetworkInterfaces": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Status": "in-use",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "SourceDestCheck": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "VpcId": "vpc-df83c9ba",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Description": "Primary network interface",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Association": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "PublicIp": "52.19.172.72",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "PublicDnsName": "ec2-52-19-172-72.eu-west-1.compute.amazonaws.com",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "IpOwnerId": "375321850564"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "NetworkInterfaceId": "eni-c835b380",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "PrivateIpAddresses": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "PrivateDnsName": "ip-172-32-8-165.eu-west-1.compute.internal",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "Association": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                        "PublicIp": "52.19.172.72",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                        "PublicDnsName": "ec2-52-19-172-72.eu-west-1.compute.amazonaws.com",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                        "IpOwnerId": "375321850564"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "Primary": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "PrivateIpAddress": "172.32.8.165"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "PrivateDnsName": "ip-172-32-8-165.eu-west-1.compute.internal",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Attachment": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "Status": "attached",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "DeviceIndex": 0,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "AttachmentId": "eni-attach-beffed5a",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "AttachTime": "2015-11-30T17:15:20.000Z"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Groups": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "GroupName": "playlist_proxy",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "GroupId": "sg-8763f6e3"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "SubnetId": "subnet-4793b630",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "OwnerId": "375321850564",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "PrivateIpAddress": "172.32.8.165"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "SourceDestCheck": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Placement": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Tenancy": "default",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "GroupName": null,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "AvailabilityZone": "eu-west-1c"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Hypervisor": "xen",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "BlockDeviceMappings": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "DeviceName": "/dev/sda1",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Ebs": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "Status": "attached",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "VolumeId": "vol-1ca60bef",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "AttachTime": "2015-11-30T17:15:22.000Z"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Architecture": "x86_64",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "RootDeviceType": "ebs",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "IamInstanceProfile": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Id": "AIPAIBJEZV7QMNZJ75LFK",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Arn": "arn:aws:iam::375321850564:instance-profile/vee_encoder"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "RootDeviceName": "/dev/sda1",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "VirtualizationType": "hvm",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Tags": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Value": "MEE PRO-A HLS Playlist Proxy",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Key": "Name"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "AmiLaunchIndex": 0\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            ]\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
        },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "OwnerId": "375321850564",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "ReservationId": "r-6a888f26",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "Groups": [],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            "Instances": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Monitoring": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "State": "disabled"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "PublicDnsName": null,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "KernelId": "aki-71665e05",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "State": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Code": 80,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Name": "stopped"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "EbsOptimized": false,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "LaunchTime": "2015-11-14T07:23:39.000Z",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "PrivateIpAddress": "172.31.22.139",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "ProductCodes": [],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "VpcId": "vpc-2f9f8847",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "StateTransitionReason": null,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "InstanceId": "i-c42f608a",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "ImageId": "ami-8e987ef9",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "PrivateDnsName": "ip-172-31-22-139.eu-west-1.compute.internal",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "KeyName": "VEE-PRO1-EU-WEST",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "SecurityGroups": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "GroupName": "vee_manager",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "GroupId": "sg-b1e4fed3"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "ClientToken": "cemKf1391159920233",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "SubnetId": "subnet-209f8848",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "InstanceType": "m1.medium",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "NetworkInterfaces": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Status": "in-use",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "SourceDestCheck": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "VpcId": "vpc-2f9f8847",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Description": null,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "NetworkInterfaceId": "eni-0340bd66",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "PrivateIpAddresses": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "PrivateDnsName": "ip-172-31-22-139.eu-west-1.compute.internal",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "Primary": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "PrivateIpAddress": "172.31.22.139"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "PrivateDnsName": "ip-172-31-22-139.eu-west-1.compute.internal",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Attachment": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "Status": "attached",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "DeviceIndex": 0,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "AttachmentId": "eni-attach-423d060e",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "AttachTime": "2014-01-31T09:18:40.000Z"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Groups": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "GroupName": "vee_manager",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                    "GroupId": "sg-b1e4fed3"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "SubnetId": "subnet-209f8848",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "OwnerId": "375321850564",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "PrivateIpAddress": "172.31.22.139"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "SourceDestCheck": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Placement": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Tenancy": "default",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "GroupName": null,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "AvailabilityZone": "eu-west-1b"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Hypervisor": "xen",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "BlockDeviceMappings": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "DeviceName": "/dev/sda1",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Ebs": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "Status": "attached",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "DeleteOnTermination": true,\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "VolumeId": "vol-3eaa9b12",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                                "AttachTime": "2014-01-31T09:18:44.000Z"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Architecture": "x86_64",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "StateReason": {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Message": "Client.InstanceInitiatedShutdown: Instance initiated shutdown",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        "Code": "Client.InstanceInitiatedShutdown"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    },\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "RootDeviceName": "/dev/sda1",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "VirtualizationType": "paravirtual",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "RootDeviceType": "ebs",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "Tags": [\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        {\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Value": "old VEE Live Manager",\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                            "Key": "Name"\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    ],\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                    "AmiLaunchIndex": 0\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
                }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
            ]\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
        }\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
    ]\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
}\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D\x0D
"""
