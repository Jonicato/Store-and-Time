const express = require('express');
const routerApi = require('./routes');

const {logErrors, errorHandler} = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

/* Es un middleware de express que nos permite trabajar con JSON */
app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
