#!/bin/bash
set -e

user=$1
role=$2
access_key_id=$3
access_key_secret=$4
token_code=$5
output_file=$6

authenticate() {
    local mfa_arn=$(get_mfa_for_user $1)
    local role_arn=$(get_role_for_system $2)
    local access_key_id=$3
    local access_key_secret=$4
    local session=aws_info_$2
    local token_code=$5


    # Create a session lasting one hour
    declare session_token_response="$(AWS_ACCESS_KEY_ID=$access_key_id AWS_SECRET_ACCESS_KEY=$access_key_secret aws sts get-session-token --duration-seconds 3600 --serial-number "$mfa_arn" --token-code "$token_code")"
    declare session_access_key_id="$(echo "$session_token_response" | jq -r '.Credentials.AccessKeyId')"
    declare session_access_key_secret="$(echo "$session_token_response" | jq -r '.Credentials.SecretAccessKey')"
    declare session_token="$(echo "$session_token_response" | jq -r '.Credentials.SessionToken')"

    # Assume the target role
    declare role_response=$(AWS_ACCESS_KEY_ID="$session_access_key_id" AWS_SECRET_ACCESS_KEY="$session_access_key_secret" AWS_SESSION_TOKEN="$session_token" aws sts assume-role --role-arn "$role_arn" --role-session-name "$session")
    declare role_access_key_id=$(echo "$role_response" | jq -r '.Credentials.AccessKeyId')
    declare role_secret_access_key=$(echo "$role_response" | jq -r '.Credentials.SecretAccessKey')
    declare role_session_token=$(echo "$role_response" | jq -r '.Credentials.SessionToken')

    echo -n "$role_access_key_id $role_secret_access_key $role_session_token"
}

get_role_for_system() {
    case $1 in
        "example")
            echo ""
            ;;
        *)
            echo Unknown system "$1" > /dev/tty
            echo "$Usage" > /dev/tty
            exit 1
    esac
}

get_mfa_for_user() {
    case $1 in
        "user1")
            echo "arn:xxx.yyy/zzz"
            ;;
        "user2")
            echo "arn:xxx.yyy/zzz"
            ;;
        "user3")
            echo "arn:xxx.yyy/zzz"
            ;;
        "user4")
            echo "arn:xxx.yyy/zzz"
            ;;
        *)
            echo "Unknown user $1" > /dev/tty
            exit 1
    esac
}

authenticate $user $role $access_key_id $access_key_secret $token_code > $output_file
