import {combineReducers} from 'redux'
import {ApplicationState} from './ApplicationState';
import gameReducer from './game/gameReducer';
import cardReducer from './card/cardReducer';
import playerReducer from './player/playerReducer';

export default combineReducers<ApplicationState>({
  game: gameReducer,
  card: cardReducer,
  player: playerReducer
})
