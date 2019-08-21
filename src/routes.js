import { Router } from 'express';

import AnimeController from './app/controllers/AnimeController';
import EpisodesController from './app/controllers/EpisodesController';
import SeasonController from './app/controllers/SeasonController';
import GenerateController from './app/controllers/GenerateController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Animeflix' });
});
routes.get('/teste', GenerateController.teste);

routes.get('/anime', AnimeController.index);
routes.get('/anime/:search', AnimeController.show);

routes.get('/season', SeasonController.index);
routes.get('/season/:id', SeasonController.show);

routes.get('/episode/:id', EpisodesController.index);
routes.get('/episode/:id/:season_number', EpisodesController.show);
routes.get(
  '/episode/:id/:season_number/:episode_number',
  EpisodesController.showEp
);

routes.post('/generate', GenerateController.store);

export default routes;
