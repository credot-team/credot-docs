---
title: Install
sidebar_position: 1
---

> https://min.io/

- Amazon S3 開源版

## Install

> docker-compose.yaml

```yaml
version: "3.7"

services:
  app:
    image: minio/minio
    command: server /data --console-address ":9001"
    ports:
      - 6060:9000
      - 6061:9001
    volumes:
      - /home/cd83207153/minio/data:/data
    environment:
      MINIO_ROOT_USER: admin
      MINIO_ROOT_PASSWORD: 123456
      MINIO_BROWSER_REDIRECT_URL: "管理介面網址"
```


- 9000: API網址,預覽圖檔網址
- 9001: 管理介面網址
