/**
 * PlayerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async (req, res) => {
    const createdPlayer = await Player.create(req.body).fetch();
    req.session.currentPlayer = {
      playerId: createdPlayer.id,
      gameId: createdPlayer.gameId
    };
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
      return res.ok(destroyedPlayer);
    } else {
      return res.ok();
    }
  },

  destroy: async (req, res) => {
    const destroyedPlayer = await Player.destroyOne({id: req.param('id')});
    req.session.currentPlayer = undefined;
    return res.ok(destroyedPlayer);
  }
};

