# nextcloud-aws
[Nextcloud](https://nextcloud.com/) deployment on AWS using [aws cdk](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).

- [nextcloud-aws](#nextcloud-aws)
  - [Useful commands](#useful-commands)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
    - [`env.sh`](#envsh)
    - [Create a key pair](#create-a-key-pair)
  - [Cleanup](#cleanup)
  - [Resources](#resources)

  ---

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `npm run cdk -- deploy`      deploy this stack to your default AWS account/region
 * `npm run cdk -- diff`        compare deployed stack with current state
 * `npm run cdk -- synth`       emits the synthesized CloudFormation template

## Prerequisites

*Understanding of aws, the aws cli and cloudformation is assumed.*

**NOTE**: Deploying this stack may incur charges to your aws account.

You will need:
- `bash` shell
- The aws cli, configured for the above user
- [`jq`](https://stedolan.github.io/jq/download/)
- An aws account.  You will need your account number, and the name of the aws region you wish to deploy resources to, e.g., `us-east-1`
- An aws account user with programmatic access, and permissions to perform tasks required by this procedure

## Setup

Install `npm` dependencies, and move on to complete the following sections.

### `env.sh`

1. Create an `env.sh` file in the scripts directory of this repo.  Add the following contents, replacing any items surrounded with `<>` with the correct value for your use case.  These variables will be consumed when generating the cloudformation stack.

```bash
#!/bin/bash
export MY_AWS_ACCOUNT=<your aws account number> 
export MY_AWS_REGION=<the aws region to deploy to> 
export MY_KEY_PAIR_NAME="NextcloudKeyPair"
export MY_PRIVATE_KEY_LOCATION=~/.ssh/nextcloud_private_key
```

### Create a key pair

**NOTE**: If you would rather use an existing key pair, set the value of `MY_KEY_PAIR_NAME` in `env.sh` to the name of your key pair, and skip the rest of this section.

--- 

If you do not already have a key pair you would like to use for this stack, run the `keypair.sh` script in the scripts folder. This will create a new aws key pair, and store a private key at `MY_PRIVATE_KEY_LOCATION` configured in `env.sh`.

```
bash scripts/keypair.sh
```

**WARNING**: If you lose your key pair, you will lose access to your EC2 instance!  Make a secure backup of your key pair.

## Cleanup

To tear down all resources, perform the following steps.

1. Using the aws console, or aws cli, remove the key pair with name `MY_KEY_PAIR_NAME` from `env.sh`.
2. Remove the stored private key from the location specified in `MY_PRIVATE_KEY_LOCATION` from `env.sh`.

## Resources

- [Medium writeup](https://medium.com/@n.moretto/nextcloud-on-aws-ad244739c586)
