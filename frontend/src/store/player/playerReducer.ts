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
    case '@@player/ADD_PLAYER':
      const players = [...state.players];
      players.push(action.player);
      return {...state, players};
    case '@@player/REMOVE_PLAYER':
      return {...state, players: state.players.filter(player => player.id !== action.player.id)};
    case '@@player/NEW_PLAYER_REQUEST':
      return {...state, newPlayer: {...state.newPlayer, loading: true, error: undefined}};
    case '@@player/NEW_PLAYER_SUCCESS':
      return {...state, newPlayer: {...state.newPlayer, playerId: action.playerId, loading: false}};
    case '@@player/NEW_PLAYER_FAILURE':
      return {...state, newPlayer: {...state.newPlayer, loading: false, error: action.error}};
    default:
      return state;
  }
};

export default playerReducer;
