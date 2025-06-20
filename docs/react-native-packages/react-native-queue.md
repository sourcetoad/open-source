---
title: React Native Queue
id: react-native-queue
---

_A React Native at-least-once priority job queue / task queue backed by persistent Realm storage, insuring that jobs persist until completed even if user closes and re-opens the app._

A simple powerful little queue system backed by [Realm](https://github.com/realm/realm-js) that slowly became abandoned. As React Native introduced Hermes we noticed that a large blocker was the Realm project, which once resolved was not updated/handled by the library. Forked in December 2018 we continued to correct issues as well as updating the supported version of Realm.

As a good rule of thumb - once Realm moves their minimum supported React Native version - we follow.

:::info

Find on GitHub at [sourcetoad/react-native-queue](https://github.com/sourcetoad/react-native-queue)

:::