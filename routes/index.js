const express = require('express');
const productsRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter = require('./categories');
const ordersRouter = require('./orders');
const customersRouter = require('./customers');
const authRouter = require('./auth');

function routerApi(app) {

  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', ordersRouter);
  router.use('/customers', customersRouter);
  router.use('/auth', authRouter);

}

module.exports = routerApi;
