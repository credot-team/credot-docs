---
title: Node
sidebar_position: 2
---

- 建立Client

```ts
import * as Minio from 'minio';

const client = new Minio.Client({
  endPoint: 'minio.credot.ml',
  port: 80,
  useSSL: true,
  accessKey: '',
  secretKey: '',
});
```

- 直接上傳檔案

```ts
app.post('/presignedUrl', async (req, res) => {
  try {
    const files = req.files;
    if (!files) {
      res.json({ message: 'files format error' });
      return;
    }

    let image = files['image'];
    if (!Array.isArray(image)) image = [image];

    const metadata: Minio.ItemBucketMetadata = { 'content-type': 'image/jpeg', service: 'aaa' };

    let resp = await client.putObject(
      'temp',
      image[0].name,
      image[0].data,
      image[0].size,
      metadata,
    );
    res.json({ message: resp });
  } catch (error: any) {
    res.json({ message: error.message });
  }
});
```


- 取得預上傳的URL

> 取得後直接對該網址做PUT上傳即可

```ts
app.get('/getURL', async (req, res) => {
  client.presignedPutObject('test', req.query.name as string, (err, url) => {
    if (err) throw err;
    res.end(url);
  });
});
```

