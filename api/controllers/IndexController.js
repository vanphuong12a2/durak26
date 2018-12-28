/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const PATH_TO_PUBLIC = __dirname + '/../../.tmp/public';

module.exports = {
  index: function(req, res) {
    res.sendFile('index.html', { root: PATH_TO_PUBLIC });
  }
};
