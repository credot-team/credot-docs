---
title: 常見正規表示式
---

- [ip格式](#ip格式)
  - [golang](#golang)
  - [js](#js)
- [字元驗證](#字元驗證)
  - [golang](#golang-1)
- [email格式](#email格式)
  - [js](#js-1)
- [UUID格式](#uuid格式)
  - [js](#js-2)
- [時間格式](#時間格式)
  - [js](#js-3)



## ip格式

### golang

```go
func matchIP(ip string) bool {
	matched, err := regexp.MatchString("((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})(\\.((2(5[0-5]|[0-4]\\d))|[0-1]?\\d{1,2})){3}", ip)
	if err != nil {
		return false
	}
	return matched
}
```

### js

```js
const ValidateIPaddress = (ipaddress) => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipaddress
      )
    ) {
      return true;
    }
    return false;
};
```

## 字元驗證

### golang

```go
match, _ := regexp.MatchString("[a-z]+", user.Password) //小寫
match, _ := regexp.MatchString("[A-Z]+", user.Password) //大寫
match, _ := regexp.MatchString("[0-9]+", user.Password) //數字
match, _ := regexp.MatchString("[^a-zA-Z0-9]+", user.Password) //特殊字元
```

## email格式

### js

```js
const isEmail=(strEmail: string)=> {
  if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) != -1)
    return true;
  else return false;
}
```

## UUID格式

### js

```js
const validateUUID = (uuid: string) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
};
```

## 時間格式

### js

```js
export const timeFormat = (input: string): boolean => {
  return /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5][0-9]$/.test(input);
};

const format = 'YYYY-MM-DDTHH:mm:ss';
export const dayTimeFormat = (input: string): boolean => {
  return dayjs(input, format).format(format) === input;
};

export const dayFormat = (input: string): boolean => {
  return dayjs(input, 'YYYY-MM-DD').format('YYYY-MM-DD') === input;
};
```
