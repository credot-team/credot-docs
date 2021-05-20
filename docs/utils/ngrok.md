---
title: ngrok
---

> https://dashboard.ngrok.com

> [ubuntu intall link](https://snapcraft.io/install/ngrok/ubuntu)

### intall

```
sudo snap install ngrok
```

### forwarding

> ngrok http 8081

得到網址

```
Session Status                online
Account                       EricWu (Plan: Free)
Version                       2.3.35
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://524c5b23a4f8.ngrok.io -> http://localhost:8081
Forwarding                    https://524c5b23a4f8.ngrok.io -> http://localhost:8081

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

### connect

- authtoken: 註冊的ngrok的帳號頒發的token

```
ngrok authtoken 1ndC6jZveOOtfz0TzEFFdiNBuzM_EuRAumdYrAt117huUoFr
```