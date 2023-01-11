import { StackContext, Api } from "@serverless-stack/resources";
import { ContainerImage, PropagatedTagSource } from "aws-cdk-lib/aws-ecs";
import { ApplicationLoadBalancedFargateService } from "aws-cdk-lib/aws-ecs-patterns";

export function MyStack({ stack }: StackContext) {
  // My Monolith
  const loadBalancedFargateService = new ApplicationLoadBalancedFargateService(
    stack,
    "Service",
    {
      propagateTags: PropagatedTagSource.SERVICE,
      memoryLimitMiB: 1024,
      desiredCount: 1,
      cpu: 512,
      taskImageOptions: {
        image: ContainerImage.fromRegistry("nginxdemos/hello"),
      },
      publicLoadBalancer: false,
    }
  );

  // SST API
  const api = new Api(stack, "api", {
    routes: {
      // Define a route for every endpoint in the new application
      "GET /": "functions/lambda.handler",
      // Proxy all other requests to the load balancer!
      "ANY /{proxy+}": {
        type: "alb",
        cdk: {
          albListener: loadBalancedFargateService.listener,
        },
      },
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
