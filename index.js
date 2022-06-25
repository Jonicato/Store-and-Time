const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer server en express');
});

app.get('/newPath', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

app.get('/products', (req, res) => {
  res.json(
    {
      name: 'Reloj 1',
      price: '1550'
    },
    {
      name: 'Reloj 2',
      price: '1650'
    },
    {
      name: 'Reloj 3',
      price: '1750'
    },
    {
      name: 'Reloj 4',
      price: '1850'
    }
  );
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
      id,
      name: 'Reloj 4',
      price: '1850'
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoriaId, productoId} = req.params;
  res.json({
    categoriaId,
    productoId
  })
})

app.listen(port, () => {
  console.log('Mi port ' + port);
});
