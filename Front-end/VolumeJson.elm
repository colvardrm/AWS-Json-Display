module VolumeJson exposing (..)


json : String
json =
    """{"Volumes": [\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1c",\x0D\x0D\x0D
            "Attachments": [\x0D\x0D\x0D
                {\x0D\x0D\x0D
                    "AttachTime": "2015-10-09T20:36:56.000Z",\x0D\x0D\x0D
                    "InstanceId": "i-a5c6571c",\x0D\x0D\x0D
                    "VolumeId": "vol-45655eb5",\x0D\x0D\x0D
                    "State": "attached",\x0D\x0D\x0D
                    "DeleteOnTermination": true,\x0D\x0D\x0D
                    "Device": "/dev/sda1"\x0D\x0D\x0D
                }\x0D\x0D\x0D
            ],\x0D\x0D\x0D
            "VolumeType": "gp2",\x0D\x0D\x0D
            "VolumeId": "vol-45655eb5",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 150,\x0D\x0D\x0D
            "SnapshotId": "snap-79b237b0",\x0D\x0D\x0D
            "CreateTime": "2015-10-09T20:36:55.980Z",\x0D\x0D\x0D
            "Size": 50\x0D\x0D\x0D
        },\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1c",\x0D\x0D\x0D
            "Attachments": [\x0D\x0D\x0D
                {\x0D\x0D\x0D
                    "AttachTime": "2015-11-13T22:09:38.000Z",\x0D\x0D\x0D
                    "InstanceId": "i-d4dcf26d",\x0D\x0D\x0D
                    "VolumeId": "vol-1473b0e7",\x0D\x0D\x0D
                    "State": "attached",\x0D\x0D\x0D
                    "DeleteOnTermination": true,\x0D\x0D\x0D
                    "Device": "/dev/sda1"\x0D\x0D\x0D
                }\x0D\x0D\x0D
            ],\x0D\x0D\x0D
            "VolumeType": "io1",\x0D\x0D\x0D
            "VolumeId": "vol-1473b0e7",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 1000,\x0D\x0D\x0D
            "SnapshotId": "snap-fb56f3d2",\x0D\x0D\x0D
            "CreateTime": "2015-11-13T22:09:38.132Z",\x0D\x0D\x0D
            "Size": 250\x0D\x0D\x0D
        },\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1c",\x0D\x0D\x0D
            "Attachments": [\x0D\x0D\x0D
                {\x0D\x0D\x0D
                    "AttachTime": "2015-11-30T17:15:22.000Z",\x0D\x0D\x0D
                    "InstanceId": "i-40fdf4f9",\x0D\x0D\x0D
                    "VolumeId": "vol-1ca60bef",\x0D\x0D\x0D
                    "State": "attached",\x0D\x0D\x0D
                    "DeleteOnTermination": true,\x0D\x0D\x0D
                    "Device": "/dev/sda1"\x0D\x0D\x0D
                }\x0D\x0D\x0D
            ],\x0D\x0D\x0D
            "VolumeType": "io1",\x0D\x0D\x0D
            "VolumeId": "vol-1ca60bef",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 2000,\x0D\x0D\x0D
            "SnapshotId": "snap-fe9bc4a8",\x0D\x0D\x0D
            "CreateTime": "2015-11-30T17:15:22.740Z",\x0D\x0D\x0D
            "Size": 500\x0D\x0D\x0D
        },\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1c",\x0D\x0D\x0D
            "Attachments": [\x0D\x0D\x0D
                {\x0D\x0D\x0D
                    "AttachTime": "2016-02-02T10:45:18.000Z",\x0D\x0D\x0D
                    "InstanceId": "i-0beaf480",\x0D\x0D\x0D
                    "VolumeId": "vol-79cee78a",\x0D\x0D\x0D
                    "State": "attached",\x0D\x0D\x0D
                    "DeleteOnTermination": true,\x0D\x0D\x0D
                    "Device": "/dev/sda1"\x0D\x0D\x0D
                }\x0D\x0D\x0D
            ],\x0D\x0D\x0D
            "VolumeType": "io1",\x0D\x0D\x0D
            "VolumeId": "vol-79cee78a",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 2000,\x0D\x0D\x0D
            "SnapshotId": "snap-71224459",\x0D\x0D\x0D
            "CreateTime": "2016-02-02T10:45:18.138Z",\x0D\x0D\x0D
            "Size": 2000\x0D\x0D\x0D
        },\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1c",\x0D\x0D\x0D
            "Attachments": [\x0D\x0D\x0D
                {\x0D\x0D\x0D
                    "AttachTime": "2016-05-27T11:01:48.000Z",\x0D\x0D\x0D
                    "InstanceId": "i-c95c1743",\x0D\x0D\x0D
                    "VolumeId": "vol-20d6f9d2",\x0D\x0D\x0D
                    "State": "attached",\x0D\x0D\x0D
                    "DeleteOnTermination": true,\x0D\x0D\x0D
                    "Device": "/dev/sda1"\x0D\x0D\x0D
                }\x0D\x0D\x0D
            ],\x0D\x0D\x0D
            "VolumeType": "io1",\x0D\x0D\x0D
            "VolumeId": "vol-20d6f9d2",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 2000,\x0D\x0D\x0D
            "SnapshotId": "snap-d35e8887",\x0D\x0D\x0D
            "CreateTime": "2016-05-27T11:01:48.793Z",\x0D\x0D\x0D
            "Size": 500\x0D\x0D\x0D
        },\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1b",\x0D\x0D\x0D
            "VolumeType": "io1",\x0D\x0D\x0D
            "VolumeId": "something else",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 1500,\x0D\x0D\x0D
            "SnapshotId": "snap-cd826de4",\x0D\x0D\x0D
            "CreateTime": "2015-11-10T03:51:54.642Z",\x0D\x0D\x0D
            "Size": 50\x0D\x0D\x0D
        },\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1b",\x0D\x0D\x0D
            "Attachments": [\x0D\x0D\x0D
                {\x0D\x0D\x0D
                    "AttachTime": "2014-01-31T09:18:44.000Z",\x0D\x0D\x0D
                    "InstanceId": "i-c42f608a",\x0D\x0D\x0D
                    "VolumeId": "vol-3eaa9b12",\x0D\x0D\x0D
                    "State": "attached",\x0D\x0D\x0D
                    "DeleteOnTermination": true,\x0D\x0D\x0D
                    "Device": "/dev/sda1"\x0D\x0D\x0D
                }\x0D\x0D\x0D
            ],\x0D\x0D\x0D
            "VolumeType": "standard",\x0D\x0D\x0D
            "VolumeId": "vol-3eaa9b12",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "SnapshotId": "snap-530efb4d",\x0D\x0D\x0D
            "CreateTime": "2014-01-31T09:18:44.768Z",\x0D\x0D\x0D
            "Size": 50\x0D\x0D\x0D
        },\x0D\x0D\x0D
        {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1b",\x0D\x0D\x0D
            "Attachments": [\x0D\x0D\x0D
                {\x0D\x0D\x0D
                    "AttachTime": "2015-11-10T03:51:54.000Z",\x0D\x0D\x0D
                    "InstanceId": "i-4cc338f5",\x0D\x0D\x0D
                    "VolumeId": "vol-8d43034e",\x0D\x0D\x0D
                    "State": "attached",\x0D\x0D\x0D
                    "DeleteOnTermination": true,\x0D\x0D\x0D
                    "Device": "/dev/sda1"\x0D\x0D\x0D
                }\x0D\x0D\x0D
            ],\x0D\x0D\x0D
            "VolumeType": "io1",\x0D\x0D\x0D
            "VolumeId": "vol-8d43034e",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 1500,\x0D\x0D\x0D
            "SnapshotId": "snap-cd826de4",\x0D\x0D\x0D
            "CreateTime": "2015-11-10T03:51:54.642Z",\x0D\x0D\x0D
            "Size": 50\x0D\x0D\x0D
        },\x0D\x0D\x0D
     {\x0D\x0D\x0D
            "AvailabilityZone": "eu-west-1b",\x0D\x0D\x0D
            "VolumeType": "io1",\x0D\x0D\x0D
            "VolumeId": "something",\x0D\x0D\x0D
            "State": "in-use",\x0D\x0D\x0D
            "Iops": 1500,\x0D\x0D\x0D
            "SnapshotId": "snap-cd826de4",\x0D\x0D\x0D
            "CreateTime": "2015-11-10T03:51:54.642Z",\x0D\x0D\x0D
            "Size": 50\x0D\x0D\x0D
     }\x0D\x0D\x0D
\x0D\x0D\x0D
    ]\x0D\x0D\x0D
    }\x0D\x0D\x0D
"""
