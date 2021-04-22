---
title: 使用 CDN 建立專案
sidebar_position: 4
---

:::danger 注意
利用 CDN 來建立 React 專案會有效能上的問題，應該盡量避免使用
:::

## 在 html 中加入 react 與 babel 的函式庫

```html
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

## 在 body 中加入 react 元件

`"text/babel"`

```html
<script type="text/babel">
  const App = () => {
    return <div>hello</div>;
  };

  ReactDOM.render(<App />, document.getElementById('root'));
</script>
```

## 完整範例

```html title="src/index.html"
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="icon" href="/favicon.ico" />

    <title>react-cdn-test</title>

    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>

    <div id="root"></div>

    <script type="text/babel">
      const App = () => {
        const [text, setText] = React.useState('');

        React.useEffect(() => {
          setText('hello');
        }, []);

        return <div>{text}</div>;
      };

      ReactDOM.render(<App />, document.getElementById('root'));
    </script>
  </body>
</html>
```
