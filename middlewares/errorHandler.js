function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message, //muestra al cliente un mensaje de error
    stack: err.stack, //muestra la información del error
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = {logErrors, errorHandler, boomErrorHandler};
