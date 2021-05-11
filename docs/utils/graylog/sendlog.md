---
title: Sendlog
sidebar_position: 2
---

## 協定

- [gelf 協定](https://docs.fluentbit.io/manual/pipeline/outputs/gelf)
- [log-level 1~7](https://en.wikipedia.org/wiki/Syslog#cite_note-opengroupSyslog-8)

## api

```js
export const emerg = 0; // A panic condition.
export const alert = 1; // A condition that should be corrected immediately, such as a corrupted system database.
export const crit = 2; // Hard device errors.
export const err = 3;
export const warning = 4;
export const notice = 5; // Conditions that are not error conditions, but that may require special handling.
export const info = 6;
export const debug = 7; // only when debugging a program.

const host = 'peman';
const graylogURL = 'http://localhost:12201/gelf';

export const log = async (
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
  message: string,
  others?: object,
) => {
  let body = {
    host, // 用來給source查詢用名稱
    level, // 用來顯示訊息層級
    short_message: message,
    ...others,
  };
  try {
    let result = await axios.post(graylogURL, body);
    if (result.status !== 202) {
      console.log('send graylog fail, error: ', result.config.data);
    }
  } catch (error) {
    console.log('send graylog fail, error: ', error);
  }
};
```
