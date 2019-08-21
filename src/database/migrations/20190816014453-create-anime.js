module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('animes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      popularity: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      poster_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      backdrop_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      number_of_episodes: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      number_of_seasons: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      vote_average: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      vote_count: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_themoviedb: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('animes');
  },
};
