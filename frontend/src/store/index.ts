import { combineReducers } from 'redux'
import card from './card/card';
import player from './player/player';
import game from './game/game';
import {ApplicationState} from './ApplicationState';

export default combineReducers<ApplicationState>({
  card,
  player,
  game
})
