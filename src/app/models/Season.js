import Sequelize, { Model } from 'sequelize';

class Season extends Model {
  static init(sequelize) {
    super.init(
      {
        air_date: Sequelize.DATE,
        episode_count: Sequelize.INTEGER,
        name: Sequelize.STRING,
        overview: Sequelize.TEXT,
        poster_path: Sequelize.STRING,
        season_number: Sequelize.INTEGER,
        id_themoviedb: Sequelize.INTEGER,
        id_season: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Season;
