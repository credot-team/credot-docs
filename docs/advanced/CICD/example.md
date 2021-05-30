---
title: example
sidebar_position: 2
---

## network

```yaml
version: '3.1'

services:

  db:
    image: postgres
    container_name: postgres
    networks:
      - db
    restart: always
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: 2wsx4rfv6yhn

  adminer:
    image: adminer
    restart: always
    networks:
      - db
    ports:
      - 8081:8080

networks:
  db:
    driver: bridge
```

## 後端

### dockerfile

```dockerfile
# --------------> The build image
FROM node:latest AS build
WORKDIR /usr/src/app
COPY src /usr/src/app/src
COPY package.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY setting.toml /usr/src/app/
COPY .env /usr/src/app/
COPY cfg /usr/src/app/cfg
RUN yarn global add typescript
RUN yarn global add yarn
RUN yarn install

# --------------> The production image
FROM node:lts-alpine
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
CMD ["dumb-init", "yarn", "createDB"]
```

### drone

> .drone.yml

```yaml
kind: pipeline
type: docker #在docker環境中執行
name: test #自定義pipleline名稱

steps: #工作列表
  - name: build-image #自訂工作名稱
    when:
      event: tag
    pull: if-not-exists #要不要pull指定的image
    image: plugins/docker #指定要拿來執行command的image或者plugin
    settings:
      registry: registry.hub.docker.com #dockerhub registry url
      repo: registry.hub.docker.com/credot/pemen_be #打包完要上傳的docker repo名稱
      dockerfile: Dockerfile #根據指定的Docker file打包image
      username:
        from_secret: hubname
      password:
        from_secret: hubsecret
      tags:
        - latest
        - ${DRONE_TAG}

   - name: ssh-deploy
    when:
      event: tag
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: sshhost
      username:
        from_secret: sshname
      key: #使用sshkey登入
        from_secret: sshkey
      port: 22
      command_timeout: 2m
      script:
        - sudo docker stop amber-server
        - sudo docker rm amber-server
        - sudo docker rmi amber-server 
        - sudo docker pull skynocover/amber-server
        - sudo docker run -d -p 3001:3001 --network=db_net --env DBName=amber --env DBUser=postgres --env DBPw=a123456 --env DBHost=postgres --name=amber-server skynocover/amber-server

```

### docker-compose

```yaml
version: '3.1'

services:
  be:
    image: credot/pemen_be
    ports:
      - 3001:3001
    restart: always

networks:
  default:
    external: true
    name: docker_db
```

## 前端

### dockerfile

```dockerfile
# --------------> The build image
FROM node:latest AS build
WORKDIR /usr/src/app
COPY src /usr/src/app/src
COPY public /usr/src/app/public
COPY .env /usr/src/app/
COPY craco.config.js /usr/src/app/
COPY package.json /usr/src/app/
COPY tailwind.config.js /usr/src/app/
COPY tsconfig.json /usr/src/app/
RUN yarn global add typescript
RUN yarn install
RUN yarn build

# --------------> The production image
FROM caddy:2.4.0-alpine
COPY --from=build /usr/src/app/build/ /usr/share/caddy/
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
```

### drone

> .drone.yml

```yaml
kind: pipeline
type: docker #在docker環境中執行
name: test #自定義pipleline名稱

steps: #工作列表
  - name: build-image #自訂工作名稱
    when:
      event: tag
    pull: if-not-exists #要不要pull指定的image
    image: plugins/docker #指定要拿來執行command的image或者plugin
    settings:
      registry: registry.hub.docker.com #dockerhub registry url
      repo: registry.hub.docker.com/credot/pemen_fe #打包完要上傳的docker repo名稱
      dockerfile: Dockerfile #根據指定的Docker file打包image
      username:
        from_secret: hubname
      password:
        from_secret: hubsecret
      tags:
        - latest
        - ${DRONE_TAG}

  - name: ssh-deploy
    when:
      event: tag
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: sshhost
      username:
        from_secret: sshname
      password: #使用password登入
        from_secret: sshkey
      port: 22
      command_timeout: 2m
      script:
        - cd /root/fe
        - docker-compose down
        - docker pull credot/pemen_fe
        - docker-compose up -d

```

### docker-compose

```yaml
version: '3.1'

services:
  fe:
    image: credot/pemen_fe
    ports:
      - 8080:80
    restart: always
```

## 服務proxy

```nginx
2c873df5d61d.ngrok.io:80 {
        reverse_proxy /api/* localhost:3001
        reverse_proxy /graphql localhost:3001
        reverse_proxy localhost:8080
}
```
