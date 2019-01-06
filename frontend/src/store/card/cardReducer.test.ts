import cardReducer from './cardReducer';
import {cards} from '../../common/TestData';

describe('card reducer', () => {

  it('should set the state', () => {

    const cardStore = cardReducer(undefined, {type: '@@card/SET_CARDS', cards});
    expect(cardStore.cards).toEqual(cards);
  });
});
