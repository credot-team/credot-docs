---
title: deploy
sidebar_position: 2
---


## project

- create

```
dokku apps:create dokkusample
```

- list

```
dokku apps:list
```

### git

- create

```
dokku git:initialize dokkusample
```

- add at local

```
git remote add dokku dokku@dokku:dokkusample
```

- 查看app狀態

```
dokku apps:report dokkusample
```

### proxy

> proxy:ports-set [app] [scheme]:[host-port]:[container-port]

```
dokku proxy:ports-set dokkusample http:80:5000
```

- 查詢

```
dokku proxy:report dokkusample
```

### domain

> domains:add [app] [domain]

```
dokku domains:add dokkusample dokku.credot.ml
```

- 查詢
  
```
dokku domains:report dokkusample
```

### service

- 查看log

```
dokku logs dokkusample
```

### images

- 查看images tags

```
dokku tags dokkusample
```

- deploy

```
dokku tags:deploy dokkusample v1
```

### config

- 查詢當前config

```
dokku config:show dokkusample
```

```
=====> dokkusample env vars
DOKKU_APP_RESTORE:     1
DOKKU_APP_TYPE:        herokuish
DOKKU_PROXY_PORT:      80
DOKKU_PROXY_PORT_MAP:  http:80:5000
GIT_REV:               44ead77b49848d4c52d26faeaaf9c62ae23f4882
NO_VHOST:              0
```

- 設定config

```
dokku config:set dokkusample VERSION=1.0.1
```


## database

> 引入postgres

```
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
```

```
REPOSITORY          TAG       IMAGE ID       CREATED        SIZE
dokku/dokkusample   latest    10e5c73e8778   41 years ago   1.45GB
```

> 建立postgres

```
dokku postgres:create rails-database
```

> 連結

```
dokku postgres:link rails-database ruby-rails-sample
```
