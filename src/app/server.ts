import express from 'express';
import { rollDice } from '../diceRoll';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola don Pepe!');
});

app.get('/dice/:faces', (req, res) => {
  const faces = req.params.faces;
  const result = rollDice(faces);
  res.json({ result: result });
});
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
