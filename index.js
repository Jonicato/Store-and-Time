const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/authHandler')

const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000; //Si Heroku no nos manda puerto, elige por default

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

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hi! Im a new route nwn');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
