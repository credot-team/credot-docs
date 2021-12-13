---
title: using
sidebar_position: 1
---

## 用途

> 輕量化的 React,可以使編譯後的網頁大小最小化

## setting

使用 CDN 引入

```js
import { h, render } from 'https://cdn.skypack.dev/preact';
import { useState, useEffect } from 'https://cdn.skypack.dev/preact/hooks';
import htm from 'https://cdn.skypack.dev/htm';
```

## 完整範例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>preact</title>
  </head>

  <body>
    <script type="module">
      import { h, render } from 'https://cdn.skypack.dev/preact';
      import {
        useState,
        useEffect,
      } from 'https://cdn.skypack.dev/preact/hooks';
      import htm from 'https://cdn.skypack.dev/htm';

      const html = htm.bind(h);

      const text = ['部落格', '討論版', '佈告欄'];

      const App = () => {
        const [index, setIndex] = useState(0);

        const tick = () => {
          setIndex((index) => {
            let count = index + 1;
            if (count === text.length) {
              count = 0;
            }
            return count;
          });
        };

        useEffect(() => {
          let id = setInterval(() => tick(), 1200);
          return () => clearInterval(id);
        }, []);

        return html`<div>
          <h1>
            Kraft是一個免費讓您架設<font color="#BD0906">${text[index]}</font
            >的服務
          </h1>
        </div>`;
      };

      render(html`<${App}></${App}>`, document.getElementById('text'));
    </script>
    <div id="text"></div>
  </body>
</html>
```
