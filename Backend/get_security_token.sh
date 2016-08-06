#!/bin/bash
set -e

get_mfa_for_user() {
    case $1 in
        "adrian")
            echo "arn:xxx.yyy/zzz"
            ;;
        "rob")
            echo "arn:xxx.yyy/zzz"
            ;;
        "stears")
            echo "arn:xxx.yyy/zzz"
            ;;
        "steve")
            echo "arn:xxx.yyy/zzz"
            ;;
        *)
            echo "Unknown user $1" > /dev/tty
            exit 1
    esac
}

prompt_for_mfa() {
    read -p "Enter user [adrian, rob, stears, steve] " name < /dev/tty && echo
    echo $(get_mfa_for_user $name)
}


authenticate() {
    local access_key_id=$1
    local access_key_secret=$2
    local role_arn=$3
    local mfa_arn=$4
    local session=mee

    read -p "Enter MFA Token: " token_code < /dev/tty && echo

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

    export AWS_ACCESS_KEY_ID=$role_access_key_id
    export AWS_SECRET_ACCESS_KEY=$role_secret_access_key
    export AWS_SESSION_TOKEN=$role_session_token
}

get_role_for_system() {
    case $1 in
        "local")
            echo ""
            ;;
        "test")
            echo "arn:xxx.yyy/zzz"
            ;;
        "qa-a")
            echo "arn:xxx.yyy/zzz"
            ;;
        "qa-b")
            echo "arn:xxx.yyy/zzz"
            ;;
        "live")
            echo "arn:xxx.yyy/zzz"
            ;;
        "live_backup")
            echo "arn:xxx.yyy/zzz"
            ;;
        "nadq-dev-b")
            echo ""
            ;;
        "nadq-qa-a")
            echo ""
            ;;
        "nadq-qa-b")
            echo ""
            ;;
        "nadq-pro-a")
            echo ""
            ;;
        "nadq-pro-b")
            echo ""
            ;;
        *)
            echo Unknown system "$1" > /dev/tty
            echo "$Usage" > /dev/tty
            exit 1
    esac
}

function get_credentials_for_system() {
    local System=$1
    local Role=$(get_role_for_system $1)
    local MFA=$(prompt_for_mfa)

    read -s -p "Enter Access Key ID for account $System " AccessKey < /dev/tty && echo
    read -s -p "Enter Secret Access Key for account $System " SecretKey < /dev/tty && echo

    authenticate $AccessKey $SecretKey $Role $MFA
}

get_credentials_for_system qa-b

echo  AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
echo  AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
echo  AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN
aws ec2 describe-instances
