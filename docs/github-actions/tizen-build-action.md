---
title: Tizen Build GitHub Action
id: tizen-build-action
---

_Build and package a Tizen web application (`.wgt`)._

During our movement to GitHub Actions we wanted to fully automate the creation of our Tizen web applications. Thus, this action was born offering a method to cache the large Tizen Studio SDK alongside automating the creation of the `.wgt` package.

The action is built in pure Bash and designed to generate the `profiles.xml` alongside the built `.wgt` file with the following command:

```yaml
- name: Build Tizen app
  id: tizen-build-action
  uses: sourcetoad/tizen-build-action@v1
  with:
    project-dir: 'project-to-build'
    author-key: ${{ secrets.TIZEN_AUTHOR_CERT }}
    author-password: ${{ secrets.TIZEN_AUTHOR_CERT_PW }}
```

:::info

Find on GitHub at [sourcetoad/tizen-build-action](https://github.com/sourcetoad/tizen-build-action)

:::