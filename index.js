const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

/* Es un middleware de express que nos permite trabajar con JSON */
app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}

app.use(morgan('dev'));
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
