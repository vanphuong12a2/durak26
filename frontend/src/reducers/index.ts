import { combineReducers } from 'redux'
import card from './card';
import player from './player';
import game from './game';

export default combineReducers({
  card,
  player,
  game
})
