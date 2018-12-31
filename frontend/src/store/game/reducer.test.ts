import game from './reducer';

describe('game reducer', () => {

  it('should change to loading state', () => {
    const gameStore = game(undefined, {type: '@@game/ADD_GAME_REQUEST'});
    expect(gameStore.newGame.loading).toEqual(true);
  });

  it('should assign error', () => {
    const error = new Error('some-error');
    const gameStore = game(undefined, {type: '@@game/ADD_GAME_FAILURE', error});
    expect(gameStore.newGame.loading).toEqual(false);
    expect(gameStore.newGame.error).toEqual(error);
  });

  it('should assign game id', () => {
    const gameStore = game(undefined, {type: '@@game/ADD_GAME_SUCCESS', payload: {id: 123}});
    expect(gameStore.newGame.gameId).toEqual(123);
    expect(gameStore.newGame.error).toEqual(undefined);
    expect(gameStore.newGame.loading).toEqual(false);
  })

});
