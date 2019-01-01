module.exports = async function (req, res, proceed) {
  if(req.session.playerId) {
    return res.badRequest('Already in a game');
  }
  return proceed();
};
