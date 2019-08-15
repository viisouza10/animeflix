import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        full_name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      sequelize
    );
  }
}

export default User;
