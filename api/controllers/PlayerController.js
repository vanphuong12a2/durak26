/**
 * PlayerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const createRecord = async (req, res) => {
  const createdPlayer = await Player.create(req.body).fetch();
  req.session.playerId = createdPlayer.id;
  return res.json(createdPlayer);
};

module.exports = {
  create: createRecord
};

