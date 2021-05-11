---
title: confit
sidebar_position: 2
---

## 設定檔

### proxy

```nginx
server {
    listen 8443;
    listen [::]:8443;
    # server_name .example.com;

    access_log /var/log/nginx/reverse-access.log;
    error_log /var/log/nginx/reverse-error.log;

    location / {
        proxy_pass https://localhost:10443;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Accept-Encoding gzip;
    }
}
```

### static file

```nginx
server {
    listen      80;
    listen      [::]:80;
    # server_name .example.com;
    index index.html;

    location / {
        root /home/fredisgod088/solid_state;
    }
}
```
