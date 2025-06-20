---
title: React Native IDScan SDK
id: react-native-idscan-sdk
---

_React Native ID Scanner wrapper for IDScan.net [ID Parsing](https://idscan.net/id-parsing/) and [Camera](https://idscan.net/id-scanning/)._

As we encountered a need to use the IDScan SDK in our projects we noticed a React Native wrapper was not available. We decided to create one to make it easier to integrate and keep it open source for the benefit of the public + a little discount.

Created in early 2021 it is actively maintained with changes when either the IDScan SDKs or React Native have changes. This project combines a few different SDKs into one package to make implementation easier. The IDScan SDKs are not open source, but the wrapper is.

This leverages:

 * [IDScan ID Parsing SDK](https://idscan.net/id-parsing/) - Parsing MRZ & PDF417 data from ID cards, passports, and other documents.
 * [IDScan Camera SDK](https://idscan.net/id-scanning/) - Scanning licenses, passports, and other documents into data objects.

Which combines them into a camera on both iOS / Android which returns a parsed payload of the license/passport scanned.

:::info

Find on GitHub at [sourcetoad/react-native-idscan-sdk](https://github.com/sourcetoad/react-native-idscan-sdk)

:::
