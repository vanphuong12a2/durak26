import {GameState} from './ApplicationState';

interface Action {
  type: any
}

const initialState: GameState = {
  playing: false
};

const game = (state: GameState = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default game;
