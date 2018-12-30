import {CardState} from './ApplicationState';
import Card from '../models/Card';

interface Action {
  type: any
}

const initialState: CardState = {
  numberOfCardsToDeal: 5,
  trumpCard: new Card('2', 'D')
};

const card = (state: CardState = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default card;
