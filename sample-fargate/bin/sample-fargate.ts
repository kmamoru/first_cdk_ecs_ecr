#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SampleFargateStack } from '../lib/sample-fargate-stack';

const app = new cdk.App();
new SampleFargateStack(app, 'SampleFargateStack');
