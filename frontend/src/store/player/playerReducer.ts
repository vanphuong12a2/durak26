import {PlayerState} from '../ApplicationState';
import {PlayerAction} from './PlayerAction';

const initialState: PlayerState = {
  players: [],
  playingPlayer: {
    loading: false
  }
};

const playerReducer = (state: PlayerState = initialState, action: PlayerAction) => {
  switch (action.type) {
    case '@@player/SET_PLAYERS':
      return {...state, players: action.players};
    case '@@player/ADD_PLAYER_REQUEST':
      return {...state, playingPlayer: {...state.playingPlayer, loading: true}};
    case '@@player/ADD_PLAYER_SUCCESS':
      return {...state, playingPlayer: {...state.playingPlayer, playerId: action.playerId, loading: false}};
    case '@@player/ADD_PLAYER_FAILURE':
      return {...state, playingPlayer: {...state.playingPlayer, loading: false, error: action.error}};
    default:
      return state;
  }
};

export default playerReducer;
