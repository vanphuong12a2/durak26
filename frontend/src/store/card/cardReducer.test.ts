import cardReducer from './cardReducer';

describe('card reducer', () => {
  it('should return the initial state', () => {
    const cardStore = cardReducer(undefined, {type: undefined});
    expect(cardStore.numberOfCardsToDeal).toEqual(52);
    expect(cardStore.trumpCard).toEqual(undefined);
  })
});
