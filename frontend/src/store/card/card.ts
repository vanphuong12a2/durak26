import {CardState} from '../ApplicationState';

interface Action {
  type: any
}

const initialState: CardState = {
  numberOfCardsToDeal: 52,
  tableCards: [],
  playingPlayerCards: []
};

const card = (state: CardState = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default card;
