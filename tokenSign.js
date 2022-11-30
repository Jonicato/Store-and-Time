const jwt = require('jsonwebtoken');
const { config } = require('./config/config');

const secret = config.jwtSecret;

// Tiempo de expiración
const jwtConfig = {
  expiresIn: '1h'
}

// No deberías tener información sensible en el payload
const payload = {
  sub: 1, // Es la forma en la que vamos a identificar el usuario
  role: 'customer'
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret, jwtConfig);

console.log(token);
