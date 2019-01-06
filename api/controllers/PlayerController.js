/**
 * PlayerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

  create: async (req, res) => {

    if (req.session.playerId) {
      return res.badRequest('Already in a game');
    } else {
      const createdPlayer = await Player.create(req.body).fetch();
      req.session.playerId = createdPlayer.id;
      req.session.gameId = createdPlayer.gameId;
      return res.json(createdPlayer);
    }
  }
};

