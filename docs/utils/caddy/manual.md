---
title: manual
sidebar_position: 2
---

## 基本使用

[link](https://caddyserver.com/docs/getting-started)  
[placeholders](https://caddyserver.com/docs/conventions#placeholders)  
[v1-v2](https://caddyserver.com/docs/v2-upgrade)

```
caddy start // 背景執行
caddy run   // 前景執行
caddy stop  // 停止
```

## 指令

```
railgun.moe gzip log /var/log/caddy/access.log tls lengz@lengzzz.com root /var/www/
```

- log 表示開啟 log 功能
- tls 表示開啟 https 並自動申請證書
- email 表示告知 CA 申請人的信箱

### tls

- 使用自簽

```
tls /etc/ssl/cert.pem /etc/ssl/key.pem
```

### redir

- 使用 301 轉導向

```
redir / https://lengzzz.com/archive/{uri} 301
```

## 設定檔

### 查看當前設定檔

```
curl localhost:2019/config/
```

### 設定檔格式

- json

```json
{
  "apps": {
    "http": {
      "servers": {
        "example": {
          "listen": [":2015"],
          "routes": [
            {
              "handle": [
                {
                  "handler": "static_response",
                  "body": "Hello, world!"
                }
              ]
            }
          ]
        }
      }
    }
  }
}
```

```
curl localhost:2019/load \
	-X POST \
	-H "Content-Type: application/json" \
	-d @caddy.json
```

- Caddyfile

```caddyfile
:2015

respond "Hello, world!"
```

```
caddy adapt
caddy adapt --config /path/to/Caddyfile
```

or

```
caddy run --config /path/to/Caddyfile
```

```
localhost {
	respond "Hello, world!"
}

localhost:2016 {
	respond "Goodbye, world!"
}
```

## api

### 更新設定檔

```
curl localhost:2019/load \
	-X POST \
	-H "Content-Type: text/caddyfile" \
	--data-binary @Caddyfile
```

## patterns

[link](https://caddyserver.com/docs/caddyfile/patterns)

### static file

```
example.com
encode gzip # 表示使用gzip壓縮
root * /var/www
file_server
```

or

```
yourdomain.com {      # 填寫網域才會自動產生 SSL 憑證，如果不寫port會同時開80跟443
    root * /home/www    # 網站根目錄
    encode gzip              # 網頁壓縮
    header /assets {  # 加入檔頭，指定 assets 路徑下
      Cache-Control "max-age=604800"   # 控制瀏覽器快取，壽命一週
    }
}
```

- path matchers

```
redir /old.html /new.html
```

### reverse proxy

```
example.com

reverse_proxy localhost:5000
```

proxy /api/ 其餘使用 static files

```
example.com

root * /var/www
reverse_proxy /api/* localhost:5000
file_server
```

### load balance

```
reverse_proxy / web1.local:80 web2.local:90 web3.local:100
```
