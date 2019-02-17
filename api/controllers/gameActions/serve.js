const constant = require('../../common/constant');

module.exports = async (req, res) => {
  const currentPlayer = req.session.currentPlayer;

  if (!currentPlayer) {
    return res.forbidden();
  }

  const gameId = currentPlayer.gameId;

  const game = await Game.findOne({id: gameId}).populate('players');
  if (game.playing) {
    return res.forbidden();
  }
  const allCards = sails.helpers.generateCards();
  const servedGame = {
    ...game,
    cards: {
      ...game.cards,
      [constant.CardPosition.TO_DEAL]: allCards.slice(game.players.length * constant.NUMBER_OF_CARDS_FOR_EACH_PLAYER + 1, allCards.length).map(() => constant.hiddenCard),
      [constant.CardPosition.TRUMP]: [allCards[game.players.length * constant.NUMBER_OF_CARDS_FOR_EACH_PLAYER]]
    },
    players: game.players.map(player => player.id),
    playing: true
  };
  await Game.updateOne({id: gameId}).set(servedGame);

  game.players.forEach(async (player, index) => {
    await Player.updateOne({id: player.id}).set(
      {
        ...player,
        cards: allCards.slice(index * constant.NUMBER_OF_CARDS_FOR_EACH_PLAYER, (index + 1) * constant.NUMBER_OF_CARDS_FOR_EACH_PLAYER)
      });
  });

  if (req.isSocket) {
    sails.sockets.broadcast(gameId, 'updateGame');
  }

  return res.ok();
};
