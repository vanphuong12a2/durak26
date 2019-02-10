/**
 * Game.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const constant = require('./../common/constant');

module.exports = {

  attributes: {
    playing: {
      type: 'boolean',
      defaultsTo: false
    },
    cards: {
      type: 'json',
      defaultsTo: {[constant.CardPosition.TO_DEAL]: sails.helpers.generateCards()},
    },
    players: {
      collection: 'player',
      via: 'gameId'
    },
  },

};
