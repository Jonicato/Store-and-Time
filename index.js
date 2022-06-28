const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

/* Es un middleware de express que nos permite trabajar con JSON */
app.use(express.json());

app.listen(port, () => {
  console.log('Mi port ' + port);
});

routerApi(app);
