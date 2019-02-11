const MAX_NUMBER_OF_PLAYERS = require('../../common/constant');
const constant = require('../../common/constant');

module.exports = async (req, res) => {
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
};
