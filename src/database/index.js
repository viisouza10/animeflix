import Sequelize from 'sequelize';

import Anime from '../app/models/Anime';
import Episodes from '../app/models/Episodes';
import Season from '../app/models/Season';

import configdb from '../config/database';

const models = [Anime, Season, Episodes];

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
