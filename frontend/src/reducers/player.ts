import Player from '../models/Player';
import {PlayerState} from './ApplicationState';

interface Action {
  type: any
}

const initialState: PlayerState = {
  players: [
    new Player(0, 'Luffy', 2),
    new Player(1, 'Sanji', 25),
    new Player(2, 'Nami', 5),
    new Player(3, 'Robin', 0)
  ],
  currentPlayer: new Player(1, 'Sanji', 25)
};

const player = (state: PlayerState = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default player;
