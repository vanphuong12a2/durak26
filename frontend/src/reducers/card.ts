import {CardState} from './ApplicationState';
import Card from '../models/Card';

interface Action {
  type: any
}

const initialState: CardState = {
  numberOfCardsToDeal: 5,
  trumpCard: new Card('2', 'D'),
  tableCards: [new Card('2', 'D'), new Card('7', 'S'), new Card('K', 'C')],
  playingPlayerCards: [new Card('5', 'H'), new Card('A', 'S'), new Card('Q', 'C')]
};

const card = (state: CardState = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default card;
