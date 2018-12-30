import game from './game';

describe('game reducer', () => {
  it('should return the initial state', () => {
    const gameStore = game(undefined, {type: undefined});
    expect(gameStore.numberOfCardsToDeal).toEqual(5);
    expect(gameStore.trumpCard.value).toEqual('2');
    expect(gameStore.trumpCard.suite).toEqual('D');
  })
});
