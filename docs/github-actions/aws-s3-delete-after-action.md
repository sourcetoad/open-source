---
title: AWS S3 Delete Older Action
id: aws-s3-delete-after-action
---

_To delete files from S3 older than a specified time frame._

After we swapped from Webpack to Vite we noticed that we could break a user's experience as they no longer had 1-2 massive files to download. Instead, they had 100s of smaller files. This meant that a re-deployment would result in the older files removed, so a user without a hard refresh would attempt to reference files that were deleted and thus crash on a route change.

This resulted in crashes like - `Unable to preload CSS for /build/assets/SiteHeader-DQ1i4IiG.css`. This problem is commonly solved with a solution known as "Skew Protection"

So we brainstormed a solution to deploy new assets alongside old assets, but needed a solution to expire assets no matter how much time passed between deploys. This resulted in the creation of this action as lifecycle policies on AWS were not a flexible enough solution.

```yaml 
- name: S3 Delete After Deploy
  uses: sourcetoad/aws-s3-delete-after-action@v1
  with:
    s3_bucket_name: bucket
    s3_prefix: prefix/
    s3_delete_phrase: "-30 days"
```

This batches deletions for every 50 files and allows our skew protection to slowly expire old assets.

:::info

Find on GitHub at [sourcetoad/aws-s3-delete-after-action](https://github.com/sourcetoad/aws-s3-delete-after-action)

:::