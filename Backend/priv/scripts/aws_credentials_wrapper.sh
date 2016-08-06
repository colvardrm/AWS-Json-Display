#!/bin/bash
set -e

command=$1


echo $1 >> /tmp/out.txt
echo $2 >> /tmp/out.txt
echo $3 >> /tmp/out.txt
echo $4 >> /tmp/out.txt

if [[ "$2" != "" ]] ; then
    echo "Exporting" >> /tmp/out.txt
    export AWS_ACCESS_KEY_ID=$2
    export AWS_SECRET_ACCESS_KEY=$3
    export AWS_SESSION_TOKEN=$4
fi

$command
