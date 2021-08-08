---
title: deploy
sidebar_position: 1
---

- [從GCP設定(建議方式)](#從gcp設定建議方式)
- [使用SDK設定](#使用sdk設定)
  - [install SDK](#install-sdk)
  - [initial](#initial)
- [deploy](#deploy)
- [GCSR](#gcsr)
  - [建立](#建立)
  - [clone](#clone)
- [備註](#備註)

## 從GCP設定(建議方式)

> 設定專案來源

- 抓取GCSR的docker image
- 連結github使用github的專案(具有CICD功能)

> cloudbuild.yaml

[build.yaml](https://cloud.google.com/build/docs/deploying-builds/deploy-cloud-run#cloud-run_2)

```yaml
steps:
# Build the container image
- name: 'gcr.io/cloud-builders/docker'
  args: ['build', '-t', 'gcr.io/$PROJECT_ID/ambermqtt:$COMMIT_SHA', '.']
# Push the container image to Container Registry
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'gcr.io/$PROJECT_ID/ambermqtt:$COMMIT_SHA']
# Deploy container image to Cloud Run
- name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
  entrypoint: gcloud
  args:
  - 'run'
  - 'deploy'
  - 'ambermqtt'
  - '--image'
  - 'gcr.io/$PROJECT_ID/ambermqtt:$COMMIT_SHA'
  - '--region'
  - 'asia-east1'
  - '--platform'
  - 'managed'
images:
- 'gcr.io/$PROJECT_ID/ambermqtt:$COMMIT_SHA'
```

## 使用SDK設定

### install SDK

- 需要有 python2.7.9 或 python3.5 以上

> https://cloud.google.com/sdk/docs/install

### initial

```
gcloud init
```

## deploy

- 會自動抓取當前資料夾下的Dockerfile
- 會在GCSR開一個docker images

> deploy.sh

```sh
GOOGLE_PROJECT_ID=crested-athlete-314512 #需要從GCP查詢
PROJECT_NAME=cloudrun #自定義名稱,不可與其他重複

gcloud builds submit --tag asia.gcr.io/$GOOGLE_PROJECT_ID/$PROJECT_NAME --project=$GOOGLE_PROJECT_ID

gcloud run deploy $PROJECT_NAME \
 --image asia.gcr.io/$GOOGLE_PROJECT_ID/$PROJECT_NAME \
 --platform managed \
 --region asia-east2 \
 --allow-unauthenticated \
 --project=$GOOGLE_PROJECT_ID
```

## GCSR

### 建立

```
gcloud source repos create hello-world
```

### clone

```
gcloud source repos clone hello-world
```

## 備註 

- [定價](https://cloud.google.com/run/pricing)

