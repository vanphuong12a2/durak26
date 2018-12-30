import player from './player';

describe('player reducer', () => {
  it('should return the initial state', () => {
    const playerStore = player(undefined, {type: undefined});
    expect(playerStore.players.length).toEqual(0);
  })
});
