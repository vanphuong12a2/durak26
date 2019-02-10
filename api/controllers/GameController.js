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
    let gameId = req.param('id');
    sails.sockets.join(req, gameId);
    const game = await Game.findOne({id: gameId}).populate('players');
    if (game) {
      const filteredGame = {
        ...game,
        cards: {
          ...game.cards,
          [constant.CardPosition.TO_DEAL]: game.cards[constant.CardPosition.TO_DEAL].map(() => constant.hiddenCard)
        }
      };

      return res.json(filteredGame);
    } else {
      return res.notFound();
    }
  },

  destroy: async (req, res) => {
    const destroyedGame = await Game.destroyOne({id: req.param('id')});
    return res.ok(destroyedGame);
  }
};

