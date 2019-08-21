import Episodes from '../models/Episodes';

class EpisodeController {
  async index(req, res) {
    const { id } = req.params;
    const seasons = await Episodes.findAll({
      where: {
        id_themoviedb: id,
      },
    });
    return res.status(200).json(seasons);
  }

  async show(req, res) {
    const { id, season_number } = req.params;
    const seasons = await Episodes.findAll({
      where: {
        id_themoviedb: id,
        season_number,
      },
      order: [['episode_number', 'ASC']],
    });
    return res.status(200).json(seasons);
  }

  async showEp(req, res) {
    const { id, season_number, episode_number } = req.params;
    const seasons = await Episodes.findAll({
      where: {
        id_themoviedb: id,
        season_number,
        episode_number,
      },
      order: [['episode_number', 'ASC']],
    });
    return res.status(200).json(seasons);
  }
}

module.exports = new EpisodeController();
