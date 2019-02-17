const constant = require('../../common/constant');

module.exports = async (req, res) => {

  const game = await Game.findOne({id: req.body.gameId}).populate('players');

  const inAnotherGame = req.session.currentPlayer && req.session.currentPlayer.gameId !== req.body.gameId;
  if (!game || inAnotherGame || game.players.length >= constant.MAX_NUMBER_OF_PLAYERS || game.playing) {
    return res.forbidden();
  }

  if (req.session.currentPlayer) {
    return res.json({
      id: req.session.currentPlayer.playerId
    });
  } else {
    const createdPlayer = await Player.create(req.body).fetch();
    req.session.currentPlayer = {
      playerId: createdPlayer.id,
      gameId: createdPlayer.gameId
    };

    if (req.isSocket) {
      sails.sockets.broadcast(createdPlayer.gameId, 'addPlayer', createdPlayer, req);
    }

    return res.json(createdPlayer);
  }
};
