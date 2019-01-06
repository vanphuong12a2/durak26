/**
 * Game.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    playing: {
      type: 'boolean'
    },
    cards: {
      type: 'json',
      defaultsTo: {}
    },
    players: {
      collection: 'player',
      via: 'gameId'
    },
  },

};
