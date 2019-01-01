import {CardState} from '../ApplicationState';
import {CardAction} from './CardAction';

const initialState: CardState = {
  numberOfCardsToDeal: 52,
  tableCards: [],
  playingPlayerCards: []
};

const cardReducer = (state: CardState = initialState, action: CardAction) => {
  switch (action.type) {
    case '@@card/SET_PLAYING_PLAYER_CARDS':
      return {...state, playingPlayerCards: action.cards};
    default:
      return state;
  }
};

export default cardReducer;
