module.exports = async (req, res) => {
  const currentPlayer = req.session.currentPlayer;
  if (currentPlayer) {
    return res.json(currentPlayer);
  } else {
    return res.notFound();
  }
};
