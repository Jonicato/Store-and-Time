const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer server en express');
});

app.get('/nuevaRuta', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

app.get('/empresa', (req, res) => {
  res.json({
    empresa: 'Morpheus DSS',
    ceo: 'David Sámano Ferreira',
    lider: 'Adriana Molina López',
    departamentos: [
      {
        area: 'Aplicaciones móviles',
        encargado: 'Ritchie'
      },
      {
        area: 'Desarrollo Web y Escritorio',
        encargado: 'Chuche'
      },
      {
        area: 'APIS',
        encargado: 'Mauricio'
      },
      {
        area: 'Administración de Bases de Datos',
        encargado: 'Paty'
      },
      {
        area: 'DevOps',
        encargado: 'Pizano'
      },
      {
        area: 'Soporte',
        encargado: 'Luly'
      },
      {
        area: 'Calidad',
        encargado: 'Jesu'
      },
      {
        area: 'Prototipos',
        encargado: 'Zuz'
      }
    ]
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
