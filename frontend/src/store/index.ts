import { combineReducers } from 'redux'
import card from './card/card';
import player from './player/player';
import {ApplicationState} from './ApplicationState';
import game from './game/reducer';

export default combineReducers<ApplicationState>({
  game,
  card,
  player
})
