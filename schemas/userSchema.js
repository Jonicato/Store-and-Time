const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(80);
const username = Joi.string().alphanum().min(3).max(30)
const password = Joi.string().alphanum().min(3).max(30)
const address = Joi.string().min(3).max(120);
const email = Joi.string.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });


const createUserSchema = Joi.object({
  name: name.required(),
  username: username.required(),
  password: password.required(),
  address: address.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  username: username,
  password: password,
  address: address,
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {createUserSchema, updateUserSchema, getUserSchema};