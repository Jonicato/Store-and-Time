const express = require('express');
const passport = require('passport');

const CategoriesService = require('./../services/categories');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('./../schemas/categorySchema');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  });

  router.post('/',
    passport.authenticate('jwt', {session: false}),
    validatorHandler(createCategorySchema, 'body'),
    async (req, res) => {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    });

  router.patch('/:id',
    passport.authenticate('jwt', {session: false}),
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id',
    passport.authenticate('jwt', {session: false}),
    validatorHandler(getCategorySchema, 'params'),
    async(req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
