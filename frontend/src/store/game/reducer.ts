import {GameState} from '../ApplicationState';
import {GameActions} from './types';

const initialState: GameState = {
  newGame: {
    loading: false
  }
};

const game = (state: GameState = initialState, action: GameActions) => {
  switch (action.type) {
    case '@@game/ADD_GAME_REQUEST':
      return {...state, newGame: {...state.newGame, loading: true}};
    case '@@game/ADD_GAME_SUCCESS':
      return {...state, newGame: {...state.newGame, gameId: action.payload.id, loading: false}};
    case '@@game/ADD_GAME_FAILURE':
      return {...state, newGame: {...state.newGame, loading: false, error: action.error}}
    default: {
      return state;
    }
  }
};

export default game;
