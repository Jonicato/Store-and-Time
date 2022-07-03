const boom = require('@hapi/boom');

//Estamos creando un middleware dinámico, ya que le pasamos el esquema y la propiedad para que encuentre los valores por donde sean enviados.
function validatorHandler(schema, property){
  return (req, res, next) => {
    const data = req[property];
    const {error} = schema.validate(data, {abortEarly: false});
    if(error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
