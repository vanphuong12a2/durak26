import {GameState} from '../ApplicationState';
import {GameAction} from './GameAction';

const initialState: GameState = {
  loading: true,
  newGame: {
    loading: false
  },
  playing: false
};

const gameReducer = (state: GameState = initialState, action: GameAction) => {
  switch (action.type) {
    case '@@game/GAME_REQUEST':
      return {...state, loading: true};
    case '@@game/GAME_FAILURE':
      return {...state, loading: false, error: action.error};
    case '@@game/LOAD_GAME_SUCCESS':
      return {...state, loading: false, playing: action.playing};
    case '@@game/SERVE_GAME_SUCCESS':
      return {...state, playing: true};
    case '@@game/ADD_GAME_REQUEST':
      return {...state, newGame: {...state.newGame, loading: true, error: undefined}};
    case '@@game/ADD_GAME_SUCCESS':
      return {...state, newGame: {...state.newGame, gameId: action.gameId, loading: false}};
    case '@@game/ADD_GAME_FAILURE':
      return {...state, newGame: {...state.newGame, loading: false, error: action.error}};
    default:
      return state;
  }
};

export default gameReducer;
