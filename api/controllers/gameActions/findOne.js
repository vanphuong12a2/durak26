const constant = require('../../common/constant');

module.exports = async (req, res) => {
  let gameId = req.param('id');
  if (req.isSocket) {
    sails.sockets.join(req, gameId);
  }
  const game = await Game.findOne({id: gameId}).populate('players');
  if (game) {
    const filteredGame = {
      ...game,
      cards: {
        ...game.cards,
        [constant.CardPosition.TO_DEAL]: game.cards[constant.CardPosition.TO_DEAL].map(() => constant.hiddenCard)
      },
      players: game.players.map(player => {
        if (req.session.currentPlayer && req.session.currentPlayer.playerId === player.id) {
          return player;
        }
        return {
          ...player,
          cards: player.cards.map(() => constant.hiddenCard)
        };
      })
    };

    return res.json(filteredGame);
  } else {
    return res.notFound();
  }
};
