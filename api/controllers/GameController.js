/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async (req, res) => {
    const createdGame = await Game.create(req.body).fetch();
    return res.json(createdGame);
  },

  findOne: async (req, res) => {
    const game = await Game.findOne({id: req.param('id')}).populate('players');
    return res.json(game);
  }
};

