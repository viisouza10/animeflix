module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('episodes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      air_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      episode_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      season_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      still_path: {
        type: Sequelize.STRING,
        allowNull: false,
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
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('episodes');
  },
};
