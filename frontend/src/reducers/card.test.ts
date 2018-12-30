import card from './card';

describe('card reducer', () => {
  it('should return the initial state', () => {
    const cardStore = card(undefined, {type: undefined});
    expect(cardStore.numberOfCardsToDeal).toEqual(5);
    expect(cardStore.trumpCard.value).toEqual('2');
    expect(cardStore.trumpCard.suite).toEqual('D');
  })
});
