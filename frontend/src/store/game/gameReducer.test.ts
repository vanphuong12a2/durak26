import gameReducer from './gameReducer';

describe('game reducer', () => {

  describe('load game', () => {

    it('should change to loading state', () => {
      const gameStore = gameReducer(undefined, {type: '@@game/LOAD_GAME_REQUEST'});
      expect(gameStore.loading).toEqual(true);
    });

    it('should exit loading state ', () => {
      const gameStore = gameReducer(undefined, {type: '@@game/LOAD_GAME_SUCCESS'});
      expect(gameStore.loading).toEqual(false);
    });

    it('should assign error', () => {
      const error = new Error('someError');
      const gameStore = gameReducer(undefined, {type: '@@game/LOAD_GAME_FAILURE', error});
      expect(gameStore.loading).toEqual(false);
      expect(gameStore.error).toEqual(error);
    });
  });

  describe('add game', () => {

    it('should change to loading state', () => {
      const gameStore = gameReducer(undefined, {type: '@@game/ADD_GAME_REQUEST'});
      expect(gameStore.newGame.loading).toEqual(true);
    });

    it('should assign error', () => {
      const error = new Error('someError');
      const gameStore = gameReducer(undefined, {type: '@@game/ADD_GAME_FAILURE', error});
      expect(gameStore.newGame.loading).toEqual(false);
      expect(gameStore.newGame.error).toEqual(error);
    });

    it('should assign game id', () => {
      const gameStore = gameReducer(undefined, {type: '@@game/ADD_GAME_SUCCESS', gameId: '123'});
      expect(gameStore.newGame.gameId).toEqual('123');
      expect(gameStore.newGame.error).toEqual(undefined);
      expect(gameStore.newGame.loading).toEqual(false);
    })
  });

});
