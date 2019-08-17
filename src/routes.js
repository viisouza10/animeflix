import { Router } from 'express';

import AnimeController from './app/controllers/AnimeController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Animeflix' });
});

routes.post('/anime', AnimeController.store);

export default routes;
