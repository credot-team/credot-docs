---
title: node 套件
sidebar_position: 2
---

## npm

[link](https://www.npmjs.com/package/ftp)

### 連線

```js
import Client from 'ftp';

const c = new Client();
c.on('ready', function () {});
c.connect({ host: ftp.ip, user: ftp.id, password: ftp.pw });
```

### 上傳

- 上傳buffer(從string轉型)

```ts
c.on('ready', function () {
  c.put(Buffer.from(csvString, 'utf-8'), filename, function (err) {
    if (err) throw err;
    c.end();
  });
});
```

- 上傳檔案

```ts
c.on('ready', function() {
  c.put('foo.txt', 'foo.remote-copy.txt', function(err) {
    if (err) throw err;
    c.end();
  });
});
```

### 列出檔案

```ts
c.list(function(err, list) {
  if (err) throw err;
  console.dir(list);
  c.end();
});
```

### 下載檔案


```ts
c.get('foo.txt', function(err, stream) {
  if (err) throw err;
  stream.once('close', function() { c.end(); });
  stream.pipe(fs.createWriteStream('foo.local-copy.txt'));
});
```


