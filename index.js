const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

/* Es un middleware de express que nos permite trabajar con JSON */
app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
