/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import axios from 'axios';
import cheerio from 'cheerio';
import Anime from '../models/Anime';
import Episodes from '../models/Episodes';
import Season from '../models/Season';
// https://www.animesgratisbr.com/naruto-classico-legendado/
const keyThemovieDb = 'a90f0a1ea3df4d0b84213fc1170f6e81';
const language = 'pt-br';

class GenerateController {
  async teste(req, res) {
    // return '.mp4';
  }

  async store(req, res) {
    const { id_anime } = req.body;
    const { url_crawler } = req.body;
    await axios
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
          console.log('anime salvo');
        } else {
          console.log('anime já cadastrado');
        }
        const countEps = await Episodes.count({
          where: { id_themoviedb: id_anime },
        });
        console.log(countEps);
        console.log(result.data.number_of_episodes);
        if (countEps >= result.data.number_of_episodes) {
          return res.status(200).json({ message: 'anime all eps created' });
        }

        // SALVANDO TEMPORADAS
        const { seasons } = result.data;
        for (const obj of seasons) {
          // await seasons.forEach(async obj => {
          if (obj.season_number === 0) continue;
          console.log(obj.season_number);
          const seasonExists = await Season.findOne({ where: { id: obj.id } });
          if (!seasonExists) {
            await Season.create({
              id: obj.id,
              air_date: obj.air_date,
              episode_count: obj.episode_count,
              name: obj.name,
              overview: obj.overview,
              poster_path: obj.poster_path,
              season_number: obj.season_number,
              id_themoviedb: id_anime,
              id_season: obj.id,
            });
            console.log(`temporada ${obj.season_number} cadastrada`);
          } else {
            console.log(`temporada ${obj.season_number} já cadastrada`);
          }

          // SALVANDO EPISODIOS
          await axios
            .get(
              `https://api.themoviedb.org/3/tv/${id_anime}/season/${obj.season_number}?api_key=${keyThemovieDb}&language=${language}&include_image_language=${language}`
            )
            .then(async epsAll => {
              const { episodes } = epsAll.data;

              // eslint-disable-next-line no-restricted-syntax
              for (const eps of episodes) {
                const url_crawlerTemp =
                  eps.episode_number > 9
                    ? `${url_crawler}-${eps.episode_number}/`
                    : `${url_crawler}-0${eps.episode_number}/`;
                // eslint-disable-next-line no-await-in-loop

                const epExists = await Episodes.findOne({
                  where: { id: eps.id },
                });
                if (!epExists) {
                  await axios.get(url_crawlerTemp).then(async resultCrawler => {
                    console.log(url_crawlerTemp);
                    const $ = await cheerio.load(resultCrawler.data);
                    await Episodes.create({
                      id: eps.id,
                      air_date: eps.air_date,
                      episode_number: eps.episode_number,
                      name: eps.name,
                      overview: eps.overview,
                      season_number: eps.season_number,
                      still_path: eps.still_path,
                      vote_average: eps.vote_average,
                      vote_count: eps.vote_count,
                      id_themoviedb: id_anime,
                      url: (await $('source')[0])
                        ? await $('source')[0].attribs.src
                        : url_crawlerTemp,
                    })
                      .then(() => {
                        console.log(`salvou ep ${eps.episode_number}`);
                        return true;
                      })
                      .catch(err => console.error(err));
                  });
                } else {
                  console.log(`ep ${eps.episode_number} já existe`);
                }
              }
              console.log('fim');
            })
            .catch(err => console.log('err', err));
        }
      })
      .catch(err => console.log('err', err));
    return res.status(200).json({ message: 'anime created' });
  }

  getUrl() {
    return '.mp4';
  }
}

module.exports = new GenerateController();
