---
title: Sendlog
sidebar_position: 2
---

## 協定

- [gelf 協定](https://docs.fluentbit.io/manual/pipeline/outputs/gelf)
- [log-level 1~7](https://en.wikipedia.org/wiki/Syslog#cite_note-opengroupSyslog-8)


## credotlog

```
git add https://github.com/credot-team/credotlog.git --force
```

### How to use

```js
import * as credotlog from 'credotlog';

credotlog.init('https', 'graylog.credot.ml', 'peman'); // 必要的初始化, 參數: protocol, grayloghost, source

credotlog.log('Info', `${user.name}`); // 發送訊息到Graylog
credotlog.colorlog('message','debug') // 在本地端印出有顏色的訊息
credotlog.levellog('message',0) // 在本地端印出根據等級區分顏色的訊息

```