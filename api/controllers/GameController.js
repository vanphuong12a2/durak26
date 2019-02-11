/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: require('./gameActions/create'),
  findOne: require('./gameActions/findOne'),
  serve: require('./gameActions/serve')
};
