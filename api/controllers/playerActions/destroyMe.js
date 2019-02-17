const constant = require('../../common/constant');

async function resetGame(gameId) {
  const game = await Game.findOne({id: gameId}).populate('players');
  await Game.updateOne({id: gameId}).set({
    cards: {[constant.CardPosition.TO_DEAL]: new Array(52)},
    playing: false
  });
  game.players.forEach(async (player) => {
    await Player.updateOne({id: player.id}).set({cards: []});
  });
}

module.exports = async (req, res) => {
  const currentPlayer = req.session.currentPlayer;
  if (currentPlayer) {
    const destroyedPlayer = await Player.destroyOne({id: currentPlayer.playerId});
    let gameId = destroyedPlayer.gameId;
    req.session.currentPlayer = undefined;
    await resetGame(gameId);
    if (req.isSocket) {
      sails.sockets.leave(req, gameId);
      sails.sockets.broadcast(gameId, 'removePlayer', {...destroyedPlayer, cards: []}, req);
      sails.sockets.broadcast(gameId, 'updateGame');
    }
    return res.ok(destroyedPlayer);
  } else {
    return res.ok();
  }
};
