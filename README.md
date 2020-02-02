# nextcloud-aws
[Nextcloud](https://nextcloud.com/) deployment on AWS using [aws cdk](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).

- [nextcloud-aws](#nextcloud-aws)
  - [Useful commands](#useful-commands)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
    - [`env.sh`](#envsh)
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
- An aws account.  You will need your account number, and the name of the aws region you wish to deploy resources to, e.g., `us-east-1`
- An aws account user with programmatic access, and permissions to perform tasks required by this procedure
- The aws cli, configured for the above user

## Setup

Install `npm` dependencies, and move on to complete the following sections.

### `env.sh`

1. Create an `env.sh` file in the scripts directory of this repo.  Add the following contents, replacing any items surrounded with `<>` with the correct value for your use case.  These variables will be consumed when generating the cloudformation stack.

```bash
#!/bin/bash
export MY_AWS_ACCOUNT=<your aws account number> \
export MY_AWS_REGION=<the aws region to deploy to> \
```

## Resources

- [Medium writeup](https://medium.com/@n.moretto/nextcloud-on-aws-ad244739c586)
