import express from 'express';

const app = express();
app.use(express.json());
const port = 3001;

let films = [{ title: 'Interstellar' }];

const bodyIsEmpty = (body: object): boolean => {
  return body === {};
};

app.get('/', (req, res) => {
  res.send('Nesfli! Vete a /films para ver las pelis');
});

app.get('/films', (req, res) => {
  res.send({ films });
});

app.get('/films/:title', (req, res) => {
  const title = req.params.title.toLowerCase();
  const film = films.find((film) => film.title.toLowerCase() === title);
  res.send({ film });
});

app.post('/films', (req, res) => {
  if (bodyIsEmpty(req.body)) {
    res.status(400).send('Dejate de vacilones mándame algo.');
  } else {
    films.push({ title: req.body.title });
    res.send({ films });
  }
});

app.put('/films/:title', (req, res) => {
  if (bodyIsEmpty(req.body)) {
    res.status(400).send('Dejate de vacilones mándame algo.');
  } else {
    const newFilm = req.body;
    const title = req.params.title.toLowerCase();
    const filmIndex = films.findIndex((film) => film.title.toLowerCase() === title);
    if (filmIndex === -1) {
      res.status(400).send('Pa la próxima me pones una que exista bobito 😉.');
    }
    films[filmIndex] = newFilm;
    res.send({ films });
  }
});

app.delete('/films/:title', (req, res) => {
  if (bodyIsEmpty(req.body)) {
    res.status(400).send('Dejate de vacilones mándame algo.');
  } else {
    const title = req.params.title.toLowerCase();
    const filmIndex = films.findIndex((film) => film.title.toLowerCase() === title);
    if (filmIndex === -1) {
      res.status(400).send('Pa la próxima me pones una que exista bobito 😉.');
    }
    films = films.filter((_, index: number): boolean => index !== filmIndex);
    res.send({ films });
  }
});

app.listen(port, () => {
  console.log(`Nesfli app listening at http://localhost:${port}`);
});
