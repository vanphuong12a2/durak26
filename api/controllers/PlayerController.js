/**
 * PlayerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const MAX_NUMBER_OF_PLAYERS = require('../common/constant');
const constant = require('./../common/constant');

module.exports = {

  create: async (req, res) => {
    if (req.session.currentPlayer || !req.body.gameId) {
      return res.forbidden();
    }
    const game = await Game.findOne({id: req.body.gameId}).populate('players');
    if (!game || req.session.currentPlayer || game.players.length >= MAX_NUMBER_OF_PLAYERS) {
      return res.forbidden();
    }
    const createdPlayer = await Player.create(req.body).fetch();
    req.session.currentPlayer = {
      playerId: createdPlayer.id,
      gameId: createdPlayer.gameId
    };

    const filterPlayer = {
      ...createdPlayer,
      cards: createdPlayer.cards.map(() => constant.hiddenCard)
    };

    if (req.isSocket) {
      sails.sockets.broadcast(createdPlayer.gameId, 'addPlayer', filterPlayer, req);
    }

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
      if (req.isSocket) {
        sails.sockets.leave(req, destroyedPlayer.gameId);
        sails.sockets.broadcast(destroyedPlayer.gameId, 'removePlayer', {...destroyedPlayer, cards: []}, req);
      }
      return res.ok(destroyedPlayer);
    } else {
      return res.ok();
    }
  }
};

