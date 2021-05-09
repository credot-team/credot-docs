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

```go
const isEmail=(strEmail: string)=> {
  if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) != -1)
    return true;
  else return false;
}
```
