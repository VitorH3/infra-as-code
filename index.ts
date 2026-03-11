import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("first-bucket", {
    bucket: 'first-bucket-pos-graduacao',
    tags: {
        IAC: 'true',
    },
});

const ecr = new aws.ecr.Repository("first-ecr", {
    name: "first-ecr",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: 'true',
    },
});

export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;