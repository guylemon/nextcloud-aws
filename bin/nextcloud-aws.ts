#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { NextcloudAwsStack } from "../lib/nextcloud-aws-stack";

const { MY_AWS_ACCOUNT, MY_AWS_REGION } = process.env;

const app = new cdk.App();
new NextcloudAwsStack(app, "NextcloudAwsStack", {
  env: { account: MY_AWS_ACCOUNT, region: MY_AWS_REGION }
});
