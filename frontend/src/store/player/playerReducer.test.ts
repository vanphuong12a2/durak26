import playerReducer from './playerReducer';
import {anotherPlayer, aPlayer} from '../../common/TestData';

describe('player reducer', () => {

  describe('players', () => {
    it('should set players', () => {
      const players = [aPlayer];
      const playerStore = playerReducer(undefined, {type: '@@player/SET_PLAYERS', players});
      expect(playerStore.players).toEqual(players);
    });

    it('should add a player', () => {
      const players = [aPlayer];
      const playerStore = playerReducer({players, newPlayer: {loading: false}}, {type: '@@player/ADD_PLAYER', player: anotherPlayer});
      expect(playerStore.players).toEqual([aPlayer, anotherPlayer]);
    });

    it('should remove a player', () => {
      const players = [aPlayer, anotherPlayer];
      const playerStore = playerReducer({players, newPlayer: {loading: false}}, {type: '@@player/REMOVE_PLAYER', player: anotherPlayer});
      expect(playerStore.players).toEqual([aPlayer]);
    });
  });

  describe('new player', () => {

    it('should change to loading state', () => {
      const playerStore = playerReducer(undefined, {type: '@@player/NEW_PLAYER_REQUEST'});
      expect(playerStore.newPlayer.loading).toEqual(true);
    });

    it('should assign error', () => {
      const error = new Error('someError');
      const playerStore = playerReducer(undefined, {type: '@@player/NEW_PLAYER_FAILURE', error});
      expect(playerStore.newPlayer.loading).toEqual(false);
      expect(playerStore.newPlayer.error).toEqual(error);
    });

    it('should assign player id', () => {
      const playerStore = playerReducer(undefined, {type: '@@player/NEW_PLAYER_SUCCESS', playerId: '123'});
      expect(playerStore.newPlayer.playerId).toEqual('123');
      expect(playerStore.newPlayer.error).toEqual(undefined);
      expect(playerStore.newPlayer.loading).toEqual(false);
    })
  });

});
