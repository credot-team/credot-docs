---
title: 環境設定
sidebar_position: 1
---

## package.json

```json
{
  "name": "projectName",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "start": "nodemon src/index.ts",
    "bundle": "tsc && webpack",
    "migrate": "prisma migrate dev",
    "migrate-deploy": "prisma migrate deploy",
    "seed": "prisma db seed --preview-feature",
    "studio": "prisma studio",
    "generate": "npx prisma generate",
    "prisma-format": "prisma format",
    "test": "jest --bail"
  },
  "dependencies": {
    "apollo-server-express": "^2.23.0",
    "credotlog": "https://github.com/credot-team/credotlog.git",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "morgan": "^1.10.0",
  },
  "devDependencies": {
    "@types/express": "^4.17.1",
    "@types/express-session": "^1.17.3",
    "nodemon": "^2.0.7",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.4",
    "webpack": "^5.20.2",
    "webpack-cli": "^4.5.0"
  }
}
```

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


