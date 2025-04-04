---
title: Add Badge
id: add-badge
---

_Node commands to add an overlay badge, inset to the non-transparent area._

As our build systems evolved from static Jenkins to ephemeral GitHub Actions we found our existing libraries for badging mobile apps to be lacking. They depended on host binaries like ImageMagick & RSVG that had to be installed on runners - thus slowing our execution time.

Thus, this package was born as a simple Node package that leveraged the upstream ImageMagick WASM (Web Assembly) library in order to pack all dependencies into a single Node package. This allowed us to run the badging commands in a GitHub Action without needing to install any additional dependencies.

Allowing us to create high quality badged icons to distinguish between different environment builds.

| ![](assets/ic_launcher-xxxhdpi.png) | ![](assets/ic_launcher_round-xxxhdpi.png) |
|-------------------------------------|-------------------------------------------|

These are wired up into our Fastlane build process for automatic badging of our non-production builds.

:::info

Find on GitHub at [sourcetoad/add-badge](https://github.com/sourcetoad/add-badge)

:::