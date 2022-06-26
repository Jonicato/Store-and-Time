const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer server en express');
});

app.get('/newPath', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

app.get('/products', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Reloj 4',
    price: '1850'
  });
});

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parámetros');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoriaId, productoId} = req.params;
  res.json({
    categoriaId,
    productoId
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
