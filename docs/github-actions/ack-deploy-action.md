---
title: Aliyun ACK Deploy Action
id: ack-deploy-action
---

_To automatically deploy containers to Alibaba Cloud._

Among a request to support Alibaba Cloud we went out to replicate an action that followed the same pattern as our AWS ECS Deploy Action. This resulted in the creation of this action that allows us to deploy into ACK clusters. This actions works a bit differently leveraging Kubernetes tools such as:

 * [kustomize](https://kustomize.io)
 * [kubectl](https://kubernetes.io/docs/reference/kubectl)

However, once execution begins it follows a similar pattern to our AWS ECS Deploy Action. The action works as follows:

1. Leverages `kustomize` to edit/build the config file.
2. Leverages `kubectl` to apply the config file to the cluster.
3. Kicks off a deployment `kubectl rollout` to monitor the deployment.
4. Rolling back if the deployment fails using `kubectl rollout undo`.

A smaller set of features compared to the AWS ECS Deploy Action, but it allows us to deploy into ACK clusters with a similar workflow.

:::info

Find on GitHub at [sourcetoad/ack-deploy-action](https://github.com/sourcetoad/ack-deploy-action)

:::