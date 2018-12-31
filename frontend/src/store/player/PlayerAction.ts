import {Action} from 'redux';
import Player from '../../models/Player';

export interface SetPlayersAction extends Action {
  type: '@@player/SET_PLAYERS',
  players: Player[]
}

export type PlayerAction = SetPlayersAction;
