import * as cdk from "@aws-cdk/core";
import {
  AmazonLinuxImage,
  Instance,
  InstanceClass,
  InstanceProps,
  InstanceSize,
  InstanceType,
  SubnetType,
  Vpc,
  VpcProps,
  AmazonLinuxImageProps
} from "@aws-cdk/aws-ec2";

const VPC_NAME = "nextcloud-vpc";
const vpcProps: VpcProps = {
  subnetConfiguration: [
    {
      cidrMask: 24,
      name: "nextcloud-ingress",
      subnetType: SubnetType.PUBLIC
    }
  ]
};

const EC2_INSTANCE_NAME = "nextcloud-ec2";
const t3Micro = InstanceType.of(InstanceClass.T3, InstanceSize.MICRO);
const amiProps: AmazonLinuxImageProps = {};

export class NextcloudAwsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create vpc
    const nextcloudVpc = new Vpc(this, VPC_NAME, vpcProps);

    // create ec2 instance
    const instanceProps: InstanceProps = {
      instanceType: t3Micro,
      instanceName: EC2_INSTANCE_NAME,
      vpc: nextcloudVpc,
      machineImage: new AmazonLinuxImage(amiProps)
    };

    // The code that defines your stack goes here
    new Instance(this, EC2_INSTANCE_NAME, instanceProps);
  }
}
