---
title: FTP server docker安裝
sidebar_position: 1
---

## docker-compose

- [link](https://github.com/stilliard/docker-pure-ftpd/blob/master/docker-compose.yml)

```yaml
version: '3'

services:
  ftpd_server:
    image: stilliard/pure-ftpd
    container_name: pure-ftpd
    ports:
      - "21:21"
      - "30000-30009:30000-30009"
    volumes: 
      - "/folder_on_disk/data:/home/username/"
      - "/folder_on_disk/passwd:/etc/pure-ftpd/passwd"
    environment:
      PUBLICHOST: "localhost"
      FTP_USER_NAME: username
      FTP_USER_PASS: mypass
      FTP_USER_HOME: /home/username
    restart: always
```

- folder_on_disk: 需要替換成在vm上的位置
- username: 使用者名稱,可替換
- PUBLICHOST: 連線時的ip或domain
- ports: 21表示建立連線的port 30000-30009則是檔案及資料傳輸的port, 兩種port都需要開防火牆

## decktop-UI

> [filezilla](https://filezilla-project.org)



### 參考連結

- [link](https://mileslin.github.io/2020/02/%E4%BD%BF%E7%94%A8-Docker-%E5%BB%BA%E7%BD%AE-FTP-SFTP-%E7%92%B0%E5%A2%83/)
