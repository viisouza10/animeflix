import { Router } from 'express';
import axios from 'axios';

import Anime from './app/models/Anime';
import Season from './app/models/Season';

const routes = new Router();
const keyThemovieDb = 'a90f0a1ea3df4d0b84213fc1170f6e81';
const language = 'pt-br';

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.get('/anime/:id_anime', async (req, res) => {
  const { id_anime } = req.params;
  axios
    .get(
      `https://api.themoviedb.org/3/tv/${id_anime}?api_key=${keyThemovieDb}&language=${language}&include_image_language=${language}`
    )
    .then(async result => {
      // SALVANDO ANIME

      const animeExists = await Anime.findOne({ where: { id: id_anime } });

      if (!animeExists) {
        await Anime.create({
          id: result.data.id,
          name: result.data.name,
          overview: result.data.overview,
          popularity: result.data.popularity,
          poster_path: result.data.poster_path,
          backdrop_path: result.data.backdrop_path,
          number_of_episodes: result.data.number_of_episodes,
          number_of_seasons: result.data.number_of_seasons,
          vote_average: result.data.vote_average,
          vote_count: result.data.vote_count,
          id_themoviedb: id_anime,
        });
      }

      // SALVANDO TEMPORADAS
      const { seasons } = result.data;

      await seasons.map(async obj => {
        await Season.create({
          id: obj.id,
          air_date: obj.air_date,
          episode_count: obj.episode_count,
          name: obj.name,
          overview: obj.overview,
          poster_path: obj.poster_path,
          season_number: obj.season_number,
          id_themoviedb: id_anime,
          id_season: obj.id_season,
        });
      });

      return res.status(200).json({ message: 'anime created' });
    });
});

export default routes;
