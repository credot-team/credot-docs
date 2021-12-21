---
title: lifecycle
sidebar_position: 4
---

# lifecycle

> https://strapi.io/blog/understanding-the-different-types-categories-of-strapi-hooks

> https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#hook-event-object

## config

> ./src/api/[model-name]/content-types/[model-name]/lifecycles.js

```js
module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    console.log({ data, where, select, populate });

    // let's do a 20% discount everytime
    // event.params.data.price = event.params.data.price * 0.8;
  },

  afterCreate(event) {
    const { result, params, em, model, action, state } = event;
    // action: event action
    // model: mode object
    // em: EntityManager
    // params: object
    // result: only avaliable in afterXXX
    // state: share state between beforeXXX and afterXXX

    const { data, select, where, orderBy, limit, offset, populate } = params;

    console.log({ result, params });

    // do something to the result;
  },
};
```

### event action

- beforeCreate
- beforeCreateMany
- afterCreate
- afterCreateMany
- beforeUpdate
- beforeUpdateMany
- afterUpdate
- afterUpdateMany
- beforeDelete
- beforeDeleteMany
- afterDelete
- afterDeleteMany
- beforeCount
- afterCount
- beforeFindOne
- afterFindOne
- beforeFindMany
- afterFindMany
