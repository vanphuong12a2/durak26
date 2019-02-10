/**
 * PlayerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const constant = require('./../common/constant');

module.exports = {

  create: async (req, res) => {
    const createdPlayer = await Player.create(req.body).fetch();
    req.session.currentPlayer = {
      playerId: createdPlayer.id,
      gameId: createdPlayer.gameId
    };

    const filterPlayer = {
      ...createdPlayer,
      cards: createdPlayer.cards.map(() => constant.hiddenCard)
    };

    sails.sockets.broadcast(createdPlayer.gameId, 'addPlayer', filterPlayer, req);

    return res.json(createdPlayer);
  },

  findMe: async (req, res) => {
    const currentPlayer = req.session.currentPlayer;
    if (currentPlayer) {
      return res.json(currentPlayer);
    } else {
      return res.notFound();
    }
  },

  destroyMe: async (req, res) => {
    const currentPlayer = req.session.currentPlayer;
    if (currentPlayer) {
      const destroyedPlayer = await Player.destroyOne({id: currentPlayer.playerId});
      req.session.currentPlayer = undefined;
      sails.sockets.leave(req, destroyedPlayer.gameId);
      sails.sockets.broadcast(destroyedPlayer.gameId, 'removePlayer', {...destroyedPlayer, cards: []}, req);
      return res.ok(destroyedPlayer);
    } else {
      return res.ok();
    }
  }
};

