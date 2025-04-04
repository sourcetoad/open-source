---
title: React Native FS2
id: react-native-fs2
---

_A fork of [react-native-fs](https://github.com/itinance/react-native-fs) with a smaller footprint and fixes due to the upstream library seemingly being abandoned._

Forked in late December 2022, this library is a fork of the original `react-native-fs` library. The original library was not being maintained, and thus we were left to fork. Intentional or not the library became quite important in the stack of our projects so we made some changes to properly maintain it.

 * We dropped Windows support - Android and iOS are the only platforms we need to support.
 * We removed upload support - as it increased the footprint of the library, and it didn't fit our definition of a file system library.
 * We removed highly specific platform specific methods - as they were not needed in our projects.

We keep it up to date with React Native versions and actively drop old versions to keep the library small and maintainable. Some large changes we've completed and plan for:

* Blob / ArrayBuffer support - Completed.
* Android MediaStore support - Completed.
* React Native "New Architecture" support - Pending.

:::info

Find on GitHub at [sourcetoad/react-native-fs2](https://github.com/sourcetoad/react-native-fs2)

:::