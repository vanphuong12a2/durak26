import {PlayerState} from '../ApplicationState';
import {PlayerAction} from './PlayerAction';

const initialState: PlayerState = {
  players: [],
  newPlayer: {
    loading: false
  }
};

const playerReducer = (state: PlayerState = initialState, action: PlayerAction) => {
  switch (action.type) {
    case '@@player/SET_PLAYERS':
      return {...state, players: action.players};
    case '@@player/ADD_PLAYER_REQUEST':
      return {...state, newPlayer: {...state.newPlayer, loading: true}};
    case '@@player/ADD_PLAYER_SUCCESS':
      return {...state, newPlayer: {...state.newPlayer, playerId: action.playerId, loading: false}};
    case '@@player/ADD_PLAYER_FAILURE':
      return {...state, newPlayer: {...state.newPlayer, loading: false, error: action.error}};
    default:
      return state;
  }
};

export default playerReducer;
