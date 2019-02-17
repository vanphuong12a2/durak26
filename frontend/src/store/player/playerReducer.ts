import {PlayerState} from '../ApplicationState';
import {PlayerAction} from './PlayerAction';

const initialState: PlayerState = {
  players: [],
  currentPlayer: {
    loading: false
  }
};

const playerReducer = (state: PlayerState = initialState, action: PlayerAction) => {
  switch (action.type) {
    case '@@player/SET_PLAYERS':
      return {...state, players: action.players};
    case '@@player/ADD_PLAYER':
      const players = [...state.players];
      if (!players.find(player => player.id === action.player.id)) {
        players.push(action.player);
      }
      return {...state, players};
    case '@@player/REMOVE_PLAYER':
      return {...state, players: state.players.filter(player => player.id !== action.player.id)};
    case '@@player/NEW_PLAYER_REQUEST':
      return {...state, currentPlayer: {...state.currentPlayer, loading: true, error: undefined}};
    case '@@player/NEW_PLAYER_SUCCESS':
      return {...state, currentPlayer: {...state.currentPlayer, playerId: action.playerId, loading: false}};
    case '@@player/NEW_PLAYER_FAILURE':
      return {...state, currentPlayer: {...state.currentPlayer, loading: false, error: action.error}};
    default:
      return state;
  }
};

export default playerReducer;
