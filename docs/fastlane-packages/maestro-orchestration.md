---
title: Maestro Orchestration
id: maestro-orchestration
---

_To orchestrate the invocation of [Maestro](https://maestro.mobile.dev/) commands in a CI/CD pipeline between Android/iOS._

As we wanted to expand our automated testing via visual regression testing we wanted a tool that worked on top of our produced artifacts. [Maestro](https://docs.maestro.dev) was a great fit for this as it allowed us to run tests on both Android and iOS devices without complicating our build process with new dependencies.

This action packs a few features:

* The ability to build an application (iOS/Android) in Simulator/Emulator mode.
* The ability to run Maestro flows on iOS & Android
* The ability to upload the results to an S3 bucket for later analysis.
* The ability to webhook the results to a webhook URL for further processing.

This package is still in its early stages and is being actively developed.

:::info

Find on GitHub at [fastlane-plugin-maestro_orchestration](https://github.com/sourcetoad/fastlane-plugin-maestro_orchestration)

:::
