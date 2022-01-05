'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('use-lib-test')
      .service('myService')
      .getWelcomeMessage();
  },
};
