'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/test', controller.test.index);
  router.get('/api/user', controller.user.index);
  router.post('/api/login', controller.login.index);
  router.get('/api/products', controller.products.index);
};
