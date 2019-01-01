import cardReducer from './cardReducer';
import {aCard} from '../../common/TestData';

describe('card reducer', () => {

  it('should set playing player cards', () => {
    const cardStore = cardReducer(undefined, {type: '@@card/SET_PLAYING_PLAYER_CARDS', cards: [aCard]});
    expect(cardStore.playingPlayerCards).toEqual([aCard]);
  })
});
