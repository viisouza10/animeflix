module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('episodes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      air_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      episode_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      season_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      still_path: {
        type: Sequelize.STRING,
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
      url: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('episodes');
  },
};
