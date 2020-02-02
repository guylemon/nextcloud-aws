#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NextcloudAwsStack } from '../lib/nextcloud-aws-stack';

const app = new cdk.App();
new NextcloudAwsStack(app, 'NextcloudAwsStack');
