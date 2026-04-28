---
title: Plist Surgeon
id: plist-surgeon
---

_The all-in-one tool to edit iOS configuration files from one plugin during a fastlane pipeline._

As iOS evolved with enhanced permissions, capabilities, entitlements and privacy we found ourselves needing to edit more and more files as part of a pipeline in order to keep a fully automated process for a multi-themed application. This plugin was created as we found existing extensions targetted a specific key in a specific value. We kept needing to edit a different chunk of a file and as long as it was a `.plist` backed file we found luck aligning to this specific package.

Now you can edit any `.plist`, `.entitlements` or `.xcprivacy` with a single plugin. It supports dot notation and complex array notation which serializes down to the XML format that Apple expects.

```ruby
plist_surgeon(
  path: "./Info.plist",
  key: "CFBundleShortVersionString",
  value: "1.2.3"
)
```

:::info

Find on GitHub at [sourcetoad/fastlane-plugin-plist_surgeon](https://github.com/sourcetoad/fastlane-plugin-plist_surgeon)

:::
