---
title: customApi
sidebar_position: 2
---

# custom api

## create

> use content-type builder

### routes

> custom-order-create.js

```js
module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: 'POST',
      path: '/order-create2',
      handler: 'order-create.create2',
      config: {
        auth: false,
      },
    },
  ],
};
```

> order-create.js

```js
'use strict';

/**
 * order-create router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::order-create.order-create', {
  prefix: '',
  only: [], // 關閉所有的method
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
```

### controller

```js
'use strict';

/**
 *  order-create controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::order-create.order-create',
  ({ strapi }) => ({
    // handler order-create.create2
    async create2(ctx) {
      console.log('create2');

      console.log(ctx.request.body);
      try {
        ctx.body = 'ok2';
      } catch (err) {
        ctx.body = err;
      }
    },

    // handler order-create.create3
    async create3(ctx) {
      console.log('create3');
      try {
        ctx.body = 'ok';
      } catch (err) {
        ctx.body = err;
      }
    },
  }),
);
```
