import game from './game';

describe('game reducer', () => {
  it('should return the initial state', () => {
    const gameStore = game(undefined, {type: undefined});
    expect(gameStore.playing).toEqual(false);
  })
});
