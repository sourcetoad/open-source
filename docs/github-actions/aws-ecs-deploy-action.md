---
title: AWS ECS Deploy Action
id: aws-ecs-deploy-action
---

_To automatically edit task definitions via jq to then deploy & monitor._

During our movement replacing EC2 with ECS we needed a solution to deploy our applications. This resulted in the creation of this action that allows us to modify Task Definitions, upload them and trigger a deployment in one quick action.

We wanted to build a singular action - as all officially offered solutions worked with a variety of pieces and lacked monitoring. Our pure Bash solution works as follows:

1. Downloads the latest task definition defined by the `service_task_definition_name` input.
2. Automatically injects new image paths into the task definition, based on `container_image_images` input.
3. Uploads the new task definition to AWS.
4. Triggers a deployment of the service defined by the `ecs_service_name` input.
5. Polls the service until the deployment is complete with informational output on the Failed, Pending, Desired and Running tasks.

This allowed us to maintain roughly the same workflow we had with EC2 and a [similar action](./aws-codedeploy-action.md) we built.

:::info

Find on GitHub at [sourcetoad/aws-ecs-deploy-action](https://github.com/sourcetoad/aws-ecs-deploy-action)

:::