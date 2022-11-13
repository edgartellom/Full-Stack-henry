const express = require('express');
const app = express();
const { sumArray, pluck } = require('./utils');

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {
  res.json({
    message: 'test',
  });
});

app.post('/sum', (req, res) => {
  const {a, b} = req.body;
  res.json({
    result: a + b
  });
});

app.post('/product', (req, res) => {
  const {a, b} = req.body;
  res.send({
    result: a * b
  });
});

app.post('/sumArray', (req, res) => {
  const {array, num} = req.body;
  const result = sumArray(array, num);
  res.json({
    result
  });
});

app.get('/numString', (req, res) => {
  const { q } = req.query;
  if(!q || !isNaN(q)) return res.sendStatus(400);
  res.json({
    result : q.length
  })
})

app.post('/pluck', (req, res) => {
  const { arr, prop } = req.body;
  if (!arr || !prop || !Array.isArray(arr)) return res.sendStatus(400);
  const result = pluck(arr, prop);
  res.json({
    result
  });
})

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
