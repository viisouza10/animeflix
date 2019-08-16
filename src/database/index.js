import Sequelize from 'sequelize';

import Anime from '../app/models/Anime';
import Season from '../app/models/Season';

import configdb from '../config/database';

const models = [Anime, Season];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configdb);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
