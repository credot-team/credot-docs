---
title: setting
sidebar_position: 1
---

## drone 

```docker
steps: #工作列表
  - name: publish
    when:
      event: tag
    image: plugins/gcr
    settings:
      registry: asia.gcr.io
      repo: k8sbeta/pemen_be #project_id/imagename
      dockerfile: Dockerfile
      json_key:
        from_secret: jsonsecret
      tags:
        - latest
        - ${DRONE_TAG}
```

- project_id 為建立gcr的project名稱

## 參考連結

- [Authentication methods](https://cloud.google.com/container-registry/docs/advanced-authentication?hl=zh-tw#gcloud_3)

- [push image](https://cloud.google.com/container-registry/docs/pushing-and-pulling?hl=zh-tw&_ga=2.185577710.-679657367.1622080954&_gac=1.61359070.1622096055.CjwKCAjw47eFBhA9EiwAy8kzNBouAPjcFv4yrz8hGcUEtTwY5geZEJ_EtRGYTFB4rk3uuj-S5er0-RoCDhMQAvD_BwE)