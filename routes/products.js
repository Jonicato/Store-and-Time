const express = require('express');
const passport = require('passport');

const ProductsService = require('./../services/product');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema } = require('./../schemas/productSchema');

const router = express.Router();
const service = new ProductsService();

router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res) => {
    try {
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error); //Se agrega el next para atrapar de forma explícita el error con el middleware
  }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
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
});

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
