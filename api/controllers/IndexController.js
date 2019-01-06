/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const PATH_TO_PUBLIC = __dirname + '/../../frontend/build';

module.exports = {

  index: (req, res) => {
    res.sendFile('index.html', {root: PATH_TO_PUBLIC});
  }
};
