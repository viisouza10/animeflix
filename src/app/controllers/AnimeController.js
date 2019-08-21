import Anime from '../models/Anime';

const Sequelize = require('sequelize');

const { Op } = Sequelize;

class AnimeController {
  async index(req, res) {
    const anime = await Anime.findAll();
    return res.status(200).json(anime);
  }

  async show(req, res) {
    const { search } = req.params;
    const anime = await Anime.findOne({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      },
    });
    return res.status(200).json(anime);
  }
}

module.exports = new AnimeController();
