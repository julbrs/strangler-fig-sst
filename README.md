# Strangler Fig Pattern implementation in SST

This project demonstrate the use of the [Strangler Fig pattern](https://martinfowler.com/bliki/StranglerFigApplication.html) with the [SST](https://sst.dev/) framework.

## Description

An in-depth article is available [here](https://sidoine.org/using-the-strangler-fig-pattern-in-sst/)!

## Getting Started

Be sure you have proper [AWS credentials](https://docs.sst.dev/advanced/iam-credentials#loading-from-a-file).

Install dependencies

```
yarn
```

Start SST

```
yarn start
```

The output will give you the **ApiEndpoint** URL:

```
Stack dev-strangler-fig-main
  Status: deployed
  Outputs:
    ApiEndpoint: https://4av95zlloi.execute-api.us-east-1.amazonaws.com
    ServiceLoadBalancerDNSEC5B149E: internal-dev-s-Servi-UPSB0A7DPT1S-1247934432.us-east-1.elb.amazonaws.com
    ServiceServiceURL250C0FB6: http://internal-dev-s-Servi-UPSB0A7DPT1S-1247934432.us-east-1.elb.amazonaws.com
```

## Authors

- [@julbrs](https://twitter.com/_julbrs_)

## License

This project is licensed under the MIT License.

## Acknowledgments

- [SST](https://sst.dev/)
- [AWS Reinvent 2019](https://d1.awsstatic.com/events/reinvent/2019/REPEAT_1_Migrating_monolithic_applications_with_the_strangler_pattern_FSI302-R1.pdf)
