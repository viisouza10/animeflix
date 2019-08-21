import Season from '../models/Season';

const Sequelize = require('sequelize');

const { Op } = Sequelize;

class SeasonController {
  async index(req, res) {
    const seasons = await Season.findAll();
    return res.status(200).json(seasons);
  }

  async show(req, res) {
    const { id } = req.params;
    const seasons = await Season.findAll({
      where: {
        id_themoviedb: id,
        season_number: {
          [Op.gt]: '0',
        },
      },
      order: [['season_number', 'ASC']],
    });
    return res.status(200).json(seasons);
  }
}

module.exports = new SeasonController();
