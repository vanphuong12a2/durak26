import {CardState} from '../ApplicationState';
import {CardAction} from './CardAction';

const initialState: CardState = {
  cards: {}
};

const cardReducer = (state: CardState = initialState, action: CardAction) => {
  switch (action.type) {
    case '@@card/SET_CARDS':
      return {...state, cards: action.cards};
    default:
      return state;
  }
};

export default cardReducer;
