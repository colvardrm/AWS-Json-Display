#!/bin/bash
set -e

VpcId=$1
Region=$2

# Before deleting a VPC qew have to delete:
#  Subnets
#  Security Groups
#  Network ACLs  - don't do this
#  Vpn Attachments - don't do this
#  Internet Gateways
#  Route Tables
#  Network Interfaces - don't do this
#  Vpc Peering Connections


# Find any subnets in this VPC
declare -a Subnets=($(aws ec2 describe-subnets --region $Region \
                          --filters "Name=vpc-id,Values=$VpcId" \
                          --query  Subnets[*].SubnetId --output text))

declare -a SecurityGroups=($(aws ec2 describe-security-groups --region $Region \
                                 --filters "Name=vpc-id,Values=$VpcId" \
                                 --query  SecurityGroups[?Name!="default"].GroupId --output text))

declare -a InternetGateways=($(aws ec2 describe-internet-gateways --region $Region \
                                  --filters "Name=attachment.vpc-id,Values=$VpcId" \
                                  --query  InternetGateways[*].InternetGatewayId\
                                  --output text))

declare -a RouteTables=($(aws ec2 describe-route-tables --region $Region \
                              --filters "Name=vpc-id,Values=$VpcId" \
                              --query RouteTables[*].Associations[?Main==false].RouteTableId --output text))

#declare -a VpcPeeringConnections=($(aws ec2 describe-vpc-peering-connections --filters "Name=accepter-vpc-info.vpc-id,Values=$VpcId"  --query  VpcPeeringConnections[*].VpcPeeringConnectionId --output text))



for Subnet in "${Subnets[@]}"
do
    echo Deleting "Subnet $Subnet"
    aws ec2 delete-subnet --region $Region --subnet-id $Subnet
    # or do whatever with individual element of the array
done

for SecurityGroup in "${SecurityGroups[@]}"
do
    echo Deleting "Security Group $SecurityGroup"
    aws ec2 delete-security-group --region $Region --group-id $SecurityGroup
done

for InternetGateway in "${InternetGateways[@]}"
do
    echo Deleting "Internet Gateway $InternetGateway"
    aws ec2 detach-internet-gateway --region $Region --vpc-id $VpcId --internet-gateway-id $InternetGateway
    aws ec2 delete-internet-gateway --region $Region --internet-gateway-id $InternetGateway
done

for RouteTable in "${RouteTables[@]}"
do
    echo Deleting "Route Table $RouteTable"
    aws ec2 delete-route-table --region $Region --route-table-id $RouteTable
done

#for VpcPeeringConnection in "${VpcPeeringConnections[@]}"
#do
#    echo Deleting "Vpc Peering Connection $VpcPeeringConnection"
#    aws ec2 delete-vpc-peering-connection --vpc-peering-connection-id $VpcPeeringConnection --dry-run
#done

aws ec2 delete-vpc --vpc-id $VpcId --region $Region



exit 1
