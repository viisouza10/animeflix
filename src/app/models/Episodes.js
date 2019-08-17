import Sequelize, { Model } from 'sequelize';

class Episodes extends Model {
  static init(sequelize) {
    super.init(
      {
        air_date: Sequelize.DATE,
        episode_number: Sequelize.INTEGER,
        name: Sequelize.STRING,
        overview: Sequelize.TEXT,
        season_number: Sequelize.INTEGER,
        still_path: Sequelize.STRING,
        vote_average: Sequelize.FLOAT,
        vote_count: Sequelize.INTEGER,
        id_themoviedb: Sequelize.INTEGER,
        url: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

export default Episodes;
