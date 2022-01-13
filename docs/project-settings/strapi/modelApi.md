---
title: modelApi
sidebar_position: 1
---

# model api

> https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html

## end point

### collection type

> model name: restaurants

- get /api/restaurants
- post /api/restaurants
- get /api/restaurants/:id
- delete /api/restaurants/:id
- put /api/restaurants/:id

### single type

> model name: restaurant

- get /api/restaurant
- delete /api/restaurant
- put /api/restaurant

## params

> 可使用[工具](https://skynocover.github.io/qs-parser/)來組Query String

- [sort](#sort)
- [filters](#filters)
- [populate](#populate)
- [fields](#fields)

- [pagination](#pagination)
- [publicationState](#publicationstate)
- [locale](#locale)

### sort

- /api/orders?sort=createdAt:desc
- /api/orders?sort[0]=createdAt:desc&sort[1]=id:asc

### filters

|             **Operator**              |
| :-----------------------------------: |
|               $eq / $ne               |
|        $lt / $lte / $gt / $gte        |
|             $in / $notIn              |
| $contains / $notContains (大小寫敏感) |
|      $containsi / $notContainsi       |
|           $null / $notNull            |
|               $between                |
|        $startsWith / $endsWith        |
|              $or / $and               |

- /api/orders?filters[description][$contains]=Test

### populate

> 關聯資料

#### 取得一層全部關聯資料

- /api/orders?populate=\*

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "description": "test",
        "createdAt": "2021-12-10T03:38:11.333Z",
        "updatedAt": "2021-12-10T04:15:27.413Z",
        "start": "2021-12-01",
        "end": "2021-12-04",
        "room": {
          "data": {
            "id": 1,
            "attributes": {
              "type": "regular",
              "roomNo": 102,
              "beds": 1,
              "createdAt": "2021-12-09T10:15:50.429Z",
              "updatedAt": "2021-12-10T03:43:22.206Z",
              "checkIn": false
            }
          }
        },
        "users_permissions_user": {
          "data": {
            "id": 1,
            "attributes": {
              "username": "test",
              "email": "skynocover@gmail.com",
              "provider": "local",
              "confirmed": false,
              "blocked": false,
              "createdAt": "2021-12-08T16:23:59.531Z",
              "updatedAt": "2021-12-09T16:53:11.861Z"
            }
          }
        }
      }
    }
  ]
}
```

#### 取得某項關聯

- /api/orders?populate[0]=room

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "description": "test",
        "createdAt": "2021-12-10T03:38:11.333Z",
        "updatedAt": "2021-12-10T04:15:27.413Z",
        "start": "2021-12-01",
        "end": "2021-12-04",
        "room": {
          "data": {
            "id": 1,
            "attributes": {
              "type": "regular",
              "roomNo": 102,
              "beds": 1,
              "createdAt": "2021-12-09T10:15:50.429Z",
              "updatedAt": "2021-12-10T03:43:22.206Z",
              "checkIn": false
            }
          }
        }
      }
    }
  ]
}
```

#### 多層關聯

- /api/orders?populate[users_permissions_user][populate]=role

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "description": "test",
        "createdAt": "2021-12-10T03:38:11.333Z",
        "updatedAt": "2021-12-10T04:15:27.413Z",
        "start": "2021-12-01",
        "end": "2021-12-04",
        "users_permissions_user": {
          "data": {
            "id": 1,
            "attributes": {
              "username": "test",
              "email": "skynocover@gmail.com",
              "provider": "local",
              "confirmed": false,
              "blocked": false,
              "createdAt": "2021-12-08T16:23:59.531Z",
              "updatedAt": "2021-12-09T16:53:11.861Z",
              "role": {
                "data": {
                  "id": 1,
                  "attributes": {
                    "name": "Authenticated",
                    "description": "Default role given to authenticated user.",
                    "type": "authenticated",
                    "createdAt": "2021-12-08T15:22:52.884Z",
                    "updatedAt": "2021-12-11T16:01:44.504Z"
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

### fields

> 只取得某些欄位

- /api/orders?fields[0]=description&fields[1]=start

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "description": "test",
        "start": "2021-12-01"
      }
    }
  ]
}
```

### pagination

|       Parameter       |  Type   | 預設 |           描述           |
| :-------------------: | :-----: | :--: | :----------------------: |
|   pagination[page]    |   int   |  1   |           頁數           |
| pagination[pageSize]  |   int   |  25  |         每頁數量         |
| pagination[withCount] | boolean | true | 是否回傳 pageCount/total |

- /api/articles?pagination[page]=1&pagination[pageSize]=10
- /api/articles?pagination[withCount]=true

```json
{
  "data": [...],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "pageCount": 1,
      "total": 5
    }
  }
}
```

### publicationState

> 是否取得為草稿的資料

- /api/articles?publicationState=live (只取得非草稿資料,預設)
- /api/articles?publicationState=preview (不論是否為草稿都取得)

### locale

> i18n 用

> https://docs.strapi.io/developer-docs/latest/plugins/i18n.html#getting-localized-entries-with-the-locale-parameter
