---
title: module
sidebar_position: 4
---

## module設定

> package.json

```json
{
  "name": "credotlog",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "license": "MIT",
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^4.3.5"
  },
  "dependencies": {
    "axios": "^0.21.1"
  }
}
```

- 發布前要使用tsc
- tsconfig的輸出設定要打開並且設定跟main的路徑相同


> tsconfig

```json
{
  "compilerOptions": {
    "declaration": true //匯出type
  }
}
```

## 本地端引入module

```json
"dependencies": {
    "credotlog": "file:/Users/lizhulin/Documents/credotlog"
},
```

## git remote引入moduel

```
yarn add 
```

### 如果遇到import問題

tsconfig設定

```json
{
 "module": "commonjs",
}
```