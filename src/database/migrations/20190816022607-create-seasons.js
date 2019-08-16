module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seasons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      air_date: {
        type: Sequelize.DATE,
        allowNUll: true,
      },
      episode_count: {
        type: Sequelize.INTEGER,
        allowNUll: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      overview: {
        type: Sequelize.TEXT,
        allowNUll: true,
      },
      poster_path: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      season_number: {
        type: Sequelize.INTEGER,
        allowNUll: false,
      },
      id_themoviedb: {
        type: Sequelize.INTEGER,
        allowNUll: false,
      },
      id_season: {
        type: Sequelize.INTEGER,
        allowNUll: true,
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
    return queryInterface.dropTable('seasons');
  },
};
