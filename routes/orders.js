const express = require('express');
const passport = require('passport');

const OrdersService = require('./../services/orders');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createOrderSchema, getOrderSchema, addItemSchema } = require('./../schemas/orderSchema');
const { checkRoles } = require('./../middlewares/authHandler');

const router = express.Router();
const service = new OrdersService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  } catch (error) {
    next(error); //Se agrega el next para atrapar de forma explícita el error con el middleware
  }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  // checkRoles('admin', 'customer'),
  // validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = {
        userId: req.user.sub
      }
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
});

router.post('/item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
});

/* router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
}); */

/* router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
}); */

module.exports = router;
