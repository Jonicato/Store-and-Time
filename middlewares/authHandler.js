const boom = require('@hapi/boom');

const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if( apiKey === config.apiKey ) {
    next();
  } else {
    console.log('Aquí está entrando alch');
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.forbidden('Se requieren permisos de administrador'));
  }
}

function checkRoles(...roles) {
  return(req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.forbidden('No cuenta con los permisos necesarios'));
    }
  }
}

module.exports = { checkApiKey, checkAdminRole, checkRoles }
