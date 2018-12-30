import {Card} from '../components/GamePage/Game/CardSet/Card/Card';

interface Action {
  type: any
}

const initialState = {
  numberOfCardsToDeal: 5,
  trumpCard: new Card('2', 'D')
};

const game = (state = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default game;
