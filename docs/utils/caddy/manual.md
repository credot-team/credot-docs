---
title: manual
sidebar_position: 2
---

## 基本使用

[link](https://caddyserver.com/docs/getting-started)

```
caddy start // 背景執行
caddy run   // 前景執行
caddy stop  // 停止
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

[linkt](https://caddyserver.com/docs/caddyfile/patterns)

### static file

```
example.com

root * /var/www
file_server
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
