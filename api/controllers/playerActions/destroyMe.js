module.exports = async (req, res) => {
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
};
