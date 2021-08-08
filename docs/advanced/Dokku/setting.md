---
title: setting
sidebar_position: 1
---

> 將VM轉成PaaS工具

- https://dokku.com/#install-curl


## install

```
wget https://raw.githubusercontent.com/dokku/dokku/v0.24.10/bootstrap.sh
sudo DOKKU_TAG=v0.24.10 bash bootstrap.sh
```



## ssh

### 產生ssh

> ssh-keygen -t rsa -f ~/.ssh/[KEY_FILENAME] -C [USERNAME]

```
ssh-keygen -t rsa -f ~/.ssh/dokku -C dokku
```

- 到GCP將pub key貼上

### 設定ssh

> ~/.ssh/config

- Host: 自定義alias
- HostName: ip
- IdentitiesOnly: 啟用key
- IdentityFile: 指定key路徑
- User: 登入要用的user,必須是dokku

```config
Host dokku
  HostName   34.81.157.108 
  Port 22
  IdentitiesOnly yes
  IdentityFile ~/.ssh/dokku
  User dokku
```

- 測試ssh

```
ssh dokku@dokku
```

