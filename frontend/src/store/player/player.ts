import {PlayerState} from '../ApplicationState';

interface Action {
  type: any
}

const initialState: PlayerState = {
  players: [],
  playingPlayerId: undefined
};

const player = (state: PlayerState = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default player;
