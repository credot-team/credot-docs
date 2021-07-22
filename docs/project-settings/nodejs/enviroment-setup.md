---
title: 環境設定
sidebar_position: 1
---

## prettierrc

### 設定

1. Format Document With... 
2. Prettier Code formatter

- 檔名

> .prettierrc

```json
{
    "printWidth": 100,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "fluid": false,
    "arrowParens": "always"
}
```

## tsconfig

- 檔名

> tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "rootDir": "./",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true,
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true //是否要進行輸出
  },
  "include": [
    "src"
  ]
}
```

## nodemon

- 檔名

> nodemon.json

```json
{
  "ignore": ["__test__/*.js"] //不需要重啟server的檔案
}
```


