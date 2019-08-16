module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('animes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      popularity: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      poster_path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      backdrop_path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_of_episodes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      number_of_seasons: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vote_average: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      vote_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_themoviedb: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('animes');
  },
};
