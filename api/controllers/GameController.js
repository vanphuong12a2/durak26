/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const constant = require('./../common/constant');

module.exports = {

  create: async (req, res) => {
    const createdGame = await Game.create(req.body).fetch();
    return res.json(createdGame);
  },

  findOne: async (req, res) => {
    const game = await Game.findOne({id: req.param('id')}).populate('players');
    const filteredGame = {
      ...game,
      cards: {
        ...game.cards,
        [constant.CardPosition.TO_DEAL]: game.cards[constant.CardPosition.TO_DEAL].map(() => constant.hiddenCard)
      }
    };

    return res.json(filteredGame);
  }
};

