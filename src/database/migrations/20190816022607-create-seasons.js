module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seasons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        unique: true,
      },
      air_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      episode_count: {
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
      poster_path: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      season_number: {
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
    return queryInterface.dropTable('seasons');
  },
};
