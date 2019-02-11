module.exports = async (req, res) => {

  if (req.session.currentPlayer) {
    return res.forbidden();
  }
  const createdGame = await Game.create(req.body).fetch();
  return res.json(createdGame);
};
