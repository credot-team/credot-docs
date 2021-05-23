---
title: Docker安裝
sidebar_position: 1
---

## graylog

[graylog-docker](https://docs.graylog.org/en/4.0/pages/installation/docker.html)

## yaml

```yaml
version: '3'
services:
  # MongoDB: https://hub.docker.com/_/mongo/
  mongo:
    image: mongo
    networks:
      - graylog
  # Elasticsearch: https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch-oss:7.10.2
    environment:
      - http.host=0.0.0.0
      - transport.host=localhost
      - network.host=0.0.0.0
      - 'ES_JAVA_OPTS=-Xms512m -Xmx512m'
      - http.cors.allow-origin="*"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    deploy:
      resources:
        limits:
          memory: 1g
    networks:
      - graylog
  # Graylog: https://hub.docker.com/r/graylog/graylog/
  graylog:
    image: graylog/graylog:4.0.7
    environment:
      # CHANGE ME (must be at least 16 characters)!
      - GRAYLOG_PASSWORD_SECRET=somepasswordpepper
      # Password: admin
      - GRAYLOG_ROOT_PASSWORD_SHA2=8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918
      - GRAYLOG_HTTP_EXTERNAL_URI=http://127.0.0.1:9000/
    entrypoint: /usr/bin/tini -- wait-for-it elasticsearch:9200 --  /docker-entrypoint.sh
    networks:
      - graylog
    restart: always
    depends_on:
      - mongo
      - elasticsearch
    ports:
      # Graylog web interface and REST API
      - 9000:9000
      # Syslog TCP
      - 1514:1514
      # Syslog UDP
      - 1514:1514/udp
      # GELF TCP
      - 12201:12201
      # GELF UDP
      - 12201:12201/udp
networks:
  graylog:
    driver: bridge
```

### setting

- GRAYLOG_ROOT_PASSWORD_SHA2: 被 hash 過的密碼
- GRAYLOG_HTTP_EXTERNAL_URI: 設定外部 url 避免跨域
- [設定Input](https://docs.graylog.org/en/4.0/pages/installation/docker.html#how-to-get-log-data-in)

### version

- [elasticsearch-oss-version](https://www.docker.elastic.co/r/elasticsearch/elasticsearch-oss)
- [graylog-version](https://hub.docker.com/r/graylog/graylog/tags?page=1&ordering=last_updated)

## caddy

```caddy
graylog.credot.ml:80 {
  reverse_proxy /gelf localhost:12201
  reverse_proxy localhost:9000
}
```