---
title: install
sidebar_position: 1
---

## 安裝

[link](https://caddyserver.com/docs/install#debian-ubuntu-raspbian)

```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

## 開機時自動開啟

```
sudo curl -s https://raw.githubusercontent.com/mholt/caddy/master/dist/init/linux-systemd/caddy.service -o /etc/systemd/system/caddy.service # 從 github 下載 systemd 配置檔案

sudo systemctl daemon-reload # 重新載入 systemd 配置

sudo systemctl enable caddy.service # 設定 caddy 服務自啟動

sudo systemctl status caddy.service # 檢視 caddy 狀態
```
