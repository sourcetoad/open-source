---
title: Vision Camera Plugin Barcode Scanner
id: vision-camera-plugin-barcode-scanner
---

_A [VisionCamera v2](https://react-native-vision-camera.com/) plugin that utilizes [Google ML Kit](https://developers.google.com/ml-kit) for parsing._

:::danger

This project has been abandoned due to the introduction of [Vision Camera v4](https://github.com/mrousavy/react-native-vision-camera/releases/tag/v4.0.0) that included barcode scanning support natively.

:::

As camera libraries were in a bit of flux (react-native-camera deprecated, react-native-vision-camera in development) we found stuck in a situation with our dependencies that our combination of Vision Camera (v2) and Reanimated (v3) left us without a native solution for parsing barcodes.

This library linked up [Google ML Kit](https://developers.google.com/ml-kit) to the Vision Camera library to provide a plugin based solution for parsing barcodes. Just simply attaching a frame processor to the camera and it would return the parsed barcodes as detected in a callback.


:::info

Find on GitHub at [sourcetoad/vision-camera-plugin-barcode-scanner](https://github.com/sourcetoad/vision-camera-plugin-barcode-scanner)

:::