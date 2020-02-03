#!/bin/bash
# This script generates a new aws key pair for use with the nextcloud stack.
# @see https://docs.aws.amazon.com/cli/latest/reference/ec2/create-key-pair.html
source scripts/env.sh

function strip_quotes() {
    sed 's/"//g'
}

function strip_new_lines() {
    echo -e "$1"
}

# Create a new ec2 keypair.
echo "INFO Creating EC2 keypair $MY_KEY_PAIR_NAME."
new_key_pair="$(aws ec2 create-key-pair --key-name $MY_KEY_PAIR_NAME --region $MY_AWS_REGION)"

# Extract private key and key-id from response.
echo "INFO Parsing keypair content."
key_pair_id="$(echo $new_key_pair | jq '.KeyPairId' | strip_quotes)"
key_material="$(echo $new_key_pair | jq '.KeyMaterial' | strip_quotes)" 

# Write the private key to your preferred location.
echo "INFO Writing private key to specified directory."
strip_new_lines "$key_material" > $MY_PRIVATE_KEY_LOCATION

# Make the private key readonly.
echo "INFO Adding readonly permissions for owner to private key."
chmod 400 $MY_PRIVATE_KEY_LOCATION
