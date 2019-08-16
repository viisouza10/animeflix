import Sequelize, { Model } from 'sequelize';

class Anime extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        overview: Sequelize.TEXT,
        popularity: Sequelize.FLOAT,
        poster_path: Sequelize.STRING,
        backdrop_path: Sequelize.STRING,
        number_of_episodes: Sequelize.INTEGER,
        number_of_seasons: Sequelize.INTEGER,
        vote_average: Sequelize.FLOAT,
        vote_count: Sequelize.INTEGER,
        id_themoviedb: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Anime;
