import { Router } from 'express';
import axios from 'axios';

const routes = new Router();
const keyThemovieDb = 'a90f0a1ea3df4d0b84213fc1170f6e81';
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.get('/anime/:id', (req, res) => {
  const { id } = req.params;
  axios
    .get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${keyThemovieDb}&language=pt-br&include_image_language=pt-br`
    )
    .then(result => {
      console.log(result.data);
      return res.json(result.data);
    });
});

export default routes;
