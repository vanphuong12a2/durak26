import card from './card';

describe('card reducer', () => {
  it('should return the initial state', () => {
    const cardStore = card(undefined, {type: undefined});
    expect(cardStore.numberOfCardsToDeal).toEqual(52);
    expect(cardStore.trumpCard).toEqual(undefined);
  })
});
