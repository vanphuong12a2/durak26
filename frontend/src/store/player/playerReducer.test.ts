import playerReducer from './playerReducer';
import {aPlayer} from '../../common/TestData';

describe('player reducer', () => {

  it('should set players', () => {
    const players = [aPlayer];
    const playerStore = playerReducer(undefined, {type: '@@player/SET_PLAYERS', players});
    expect(playerStore.players).toEqual(players);
  });

  describe('add player', () => {

    it('should change to loading state', () => {
      const playerStore = playerReducer(undefined, {type: '@@player/ADD_PLAYER_REQUEST'});
      expect(playerStore.playingPlayer.loading).toEqual(true);
    });

    it('should assign error', () => {
      const error = new Error('someError');
      const playerStore = playerReducer(undefined, {type: '@@player/ADD_PLAYER_FAILURE', error});
      expect(playerStore.playingPlayer.loading).toEqual(false);
      expect(playerStore.playingPlayer.error).toEqual(error);
    });

    it('should assign player id', () => {
      const playerStore = playerReducer(undefined, {type: '@@player/ADD_PLAYER_SUCCESS', playerId: '123'});
      expect(playerStore.playingPlayer.playerId).toEqual('123');
      expect(playerStore.playingPlayer.error).toEqual(undefined);
      expect(playerStore.playingPlayer.loading).toEqual(false);
    })
  });

});
