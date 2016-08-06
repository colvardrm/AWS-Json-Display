#!/bin/bash
set -e


# Check usage etc here

function check_file() {
    local TheBucket=$1
    local TheKey=$2

    Result=$(aws s3api head-object --bucket $TheBucket --key $TheKey --query "ServerSideEncryption" 2> /dev/null || true)
    case $Result in
        null)
            local TheFile=s3://$TheBucket/$TheKey
            echo Fixing SSE for $TheFile
            aws s3 cp --sse AES256 $TheFile $TheFile
            ;;
        *)
            ;;
    esac
}


function main() {
    local Bucket=$1
    # local Prefix="--prefix mee/sources/sip_registrar_bootstrap_v1.0.999-mee.sh.md5"
    local Prefix=""
    declare -a Keys=($(aws s3api list-objects --bucket $Bucket $Prefix --query Contents[*].Key --output text))

    for Key in "${Keys[@]}"
    do
        case $Key in
            */)
                ;;
            *)
                check_file $Bucket $Key
                ;;
        esac
    done
}

main $1
