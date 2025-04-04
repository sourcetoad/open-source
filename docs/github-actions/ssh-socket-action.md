---
title: SSH Socket Setup GitHub Action
id: ssh-socket-action
---

_Set up (or re-use) an SSH socket with a private key._

Built out of a need to solve authentication issues with private packages, private repositories and authenticating to servers. We wanted to explore the flexibility of a Node based GitHub Action that could be used to set up an SSH socket for use with other actions.

The following features are supported:

 * Reusing an existing `SSH_AGENT_PID` and `SSH_AUTH_SOCK` if they exist
 * Creating a new SSH agent if they do not exist
 * Specifying a specific socket path or randomly generating one
 * Loading the keyscan for the host into `known_hosts`
 * Exporting the `SSH_AUTH_SOCK` and `SSH_AGENT_PID` to the environment

```yaml
- name: SSH Socket Setup
  id: ssh-socket-action
  uses: sourcetoad/ssh-socket-action@v1
  with:
      host: github.com
      key: ${{ secrets.BASE64_SECRET_KEY }}
```

This results in a small action that can be used to authenticate with a variety of services.

:::info

Find on GitHub at [sourcetoad/ssh-socket-action](https://github.com/sourcetoad/ssh-socket-action)

:::