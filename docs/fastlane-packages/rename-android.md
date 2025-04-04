---
title: Rename Android
id: rename-android
---

_Rename Android package in a CI/CD pipeline, forked from [joshdholtz/fastlane-plugin-rename_android_package](https://github.com/joshdholtz/fastlane-plugin-rename_android_package)._

A package we forked as the introduction of Kotlin to React Native poked a hole in the package that went unfixed. While we attempted to upstream fixes they went unmerged. In late 2024 we forked and rewrote the extension to be more robust for `.java` & `.kt` files.

A simple extension that just issues `sed` commands to rename a package name. Android requires a bit more effort to rename as we have to rename the package name in a few files. This extension does that for you.

```ruby
rename_android(
  path: "./", 
  package_name: "com.sourcetoad.fastlane.app", 
  new_package_name: "com.sourcetoad.fastlane.app2"
)
```
We don't imagine much more will be added to this extension as it does what it needs to do. If you have any issues please open an issue on GitHub.

:::info

Find on GitHub at [sourcetoad/fastlane-plugin-rename_android](https://github.com/sourcetoad/fastlane-plugin-rename_android)

:::
