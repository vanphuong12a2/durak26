import {PlayerState} from '../ApplicationState';
import {PlayerAction} from './PlayerAction';

const initialState: PlayerState = {
  players: [],
  playingPlayerId: undefined
};

const playerReducer = (state: PlayerState = initialState, action: PlayerAction) => {
  switch (action.type) {
    case '@@player/SET_PLAYERS':
      return {...state, players: action.players};
    default: {
      return state;
    }
  }
};

export default playerReducer;
