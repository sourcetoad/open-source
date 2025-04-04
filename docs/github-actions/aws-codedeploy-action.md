---
title: AWS CodeDeploy Action
id: aws-codedeploy-action
---

_Automatically deploy your applications to EC2 via CodeDeploy using this GitHub Action._

During our move from Jenkins to GitHub Actions for CI/CD we wanted a solution to deploy our applications to EC2 via CodeDeploy. This resulted in the development of this Bash-based action which offered the following features:

1. Automatic creation (or re-use) of an archive of the project directory.
2. Upload the archive to S3. 
3. Check for any pending deployments and wait for them to finish.
4. Trigger a deployment to the specified CodeDeploy application and deployment group.
5. Monitor the deployment until it is complete, with detailed output on the status of the deployment.

Over time, we've migrated more repositories towards ECS resulting in this action being less used. However, it is still a useful tool for those who prefer to use CodeDeploy for their deployments.

```yaml

:::info

Find on GitHub at [sourcetoad/aws-codedeploy-action](https://github.com/sourcetoad/aws-codedeploy-action)

:::
