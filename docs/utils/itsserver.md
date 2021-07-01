---
title: itsserver
sidebar_position: 7
---

## 取代ngrok做https domain服務

> 使用本地client端對具有domain的server端做註冊,取得具有https的domain  
> 將對取得domain的request轉向到本地端的server上



## 下載

到[這裡](https://github.com/skynocover/IntrospectedTunnelsSocket)下載自己作業系統的版本

## 設定檔

- 於執行檔同級建立.env檔並填入下列資訊
- DOMAIN: 於cloudflare設定好的domain,除非CF設定有改否則一率使用這個domain
- PROXY: 設定好自己需要反向代理的server

```env
DOMAIN=https://itsserver.credot.ml
PROXY=http://localhost:3001
```

## 執行

> MAC版本需要使用chmod設定執行權限才可以執行

```script
 ./itsClientDar_v0.0.3 
2021/07/01 16:33:29 get domain name:test3.credot.ml #這裡會拿到domain,對這個domain做request即可
```

> request時會有反向代理的資訊

```
2021/07/01 16:34:04 reply {JobID:186b1ada-e482-4604-b33c-3dc30474e119 Domain:test3.credot.ml Body:[123 34 115 116 97 116 117 115 34 58 34 102 97 105 108 34 44 34 116 121 112 101 34 58 34 114 101 103 117 108 97 114 34 125] Header:map[Connection:[keep-alive] Content-Length:[34] Content-Type:[application/json; charset=utf-8] Date:[Thu, 01 Jul 2021 08:34:04 GMT] Etag:[W/"22-nPae0sP0Fn13Wg9+uWf+FMltU1s"] Keep-Alive:[timeout=5] X-Powered-By:[Express]] StatusCode:200 Err:<nil>}
```

## 待發布

- 沒辦法反向代理socketio等長連線服務
- /socket.io這個path已經被佔用,無法代理