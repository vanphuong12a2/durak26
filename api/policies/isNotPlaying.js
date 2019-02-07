module.exports = async (req, res, proceed) => {

  if (req.session.currentPlayer) {
    return res.forbidden();
  }

  return proceed();
};
