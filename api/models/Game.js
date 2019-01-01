/**
 * Game.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numberOfCardsToDeal: {
      type: 'integer',
      defaultsTo: 52
    },
    trumpCard: {
      type: 'string',
      required: false
    },
    tableCards: {
      type: 'json',
      defaultsTo: []
    },
    cardsToDeal: {
      type: 'json',
      defaultsTo: []
    },
    players: {
      collection: 'player',
      via: 'gameId'
    },
  },

};
