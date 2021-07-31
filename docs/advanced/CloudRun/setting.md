---
title: setting
sidebar_position: 2
---

- [設定](#設定)
  - [匯出與匯入](#匯出與匯入)
  - [yaml檔](#yaml檔)

## 設定

> 需要使用gcloud CLI登入

### 匯出與匯入

> 匯出目前設定

```
gcloud run services describe service --format export > service.yaml
```

- service: 服務名稱

> 使用yaml設定服務

```
gcloud beta run services replace service.yaml
```

### yaml檔

```yml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  annotations:
    client.knative.dev/user-image: asia.gcr.io/crested-athlete-314512/cloudrun/cloudrun:b9dffa81e5fb2037a1539cd7273b931a7a44fb2d
    run.googleapis.com/ingress: all
    run.googleapis.com/ingress-status: all
  labels:
    cloud.googleapis.com/location: asia-east1
    commit-sha: b9dffa81e5fb2037a1539cd7273b931a7a44fb2d
    gcb-build-id: 7d41a66f-8b65-428d-a780-04f1b7d7a33d
    gcb-trigger-id: fc429b51-7d72-4419-984f-3bfeaf0f7bfa
    managed-by: gcp-cloud-build-deploy-cloud-run
  name: cloudrun
  namespace: '151113974908'
spec:
  template:
    metadata:
      annotations:
        autoscaling.knative.dev/maxScale: '100'
        autoscaling.knative.dev/minScale: '1'
        client.knative.dev/user-image: asia.gcr.io/crested-athlete-314512/cloudrun/cloudrun:b9dffa81e5fb2037a1539cd7273b931a7a44fb2d
        run.googleapis.com/client-name: gcloud
        run.googleapis.com/client-version: 350.0.0
        run.googleapis.com/sandbox: gvisor
      labels:
        commit-sha: b9dffa81e5fb2037a1539cd7273b931a7a44fb2d
        gcb-build-id: 7d41a66f-8b65-428d-a780-04f1b7d7a33d
        gcb-trigger-id: fc429b51-7d72-4419-984f-3bfeaf0f7bfa
        managed-by: gcp-cloud-build-deploy-cloud-run
      name: cloudrun-00005-zan
    spec:
      containerConcurrency: 80
      containers:
      - image: asia.gcr.io/crested-athlete-314512/cloudrun/cloudrun:b9dffa81e5fb2037a1539cd7273b931a7a44fb2d
        ports:
        - containerPort: 8080
        resources:
          limits:
            cpu: 1000m
            memory: 512Mi
      serviceAccountName: 151113974908-compute@developer.gserviceaccount.com
      timeoutSeconds: 300
  traffic:
  - latestRevision: true
    percent: 100


```


