---
title: 使用 TailwindCSS
sidebar_position: 1
---

## install

- [install](https://tailwindcss.com/docs/installation)
- [with_nextjs](https://tailwindcss.com/docs/guides/nextjs)

```
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## initial

```
npx tailwindcss init -p
```

> 將會產生 config 檔 tailwind.config.js

```
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

> purge 需要加入需要 tailwind 的路徑 eg:

```json
purge:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

## 加到專案內

```js
import 'tailwindcss/tailwind.css';
```
