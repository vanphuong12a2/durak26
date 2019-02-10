import {Action} from 'redux';
import PlayerData from '../../models/PlayerData';

export interface SetPlayersAction extends Action {
  type: '@@player/SET_PLAYERS',
  players: PlayerData[]
}

export interface NewPlayerRequestAction extends Action {
  type: '@@player/NEW_PLAYER_REQUEST'
}

export interface NewPlayerSuccessAction extends Action {
  type: '@@player/NEW_PLAYER_SUCCESS',
  playerId: string
}

export interface NewPlayerFailureAction extends Action {
  type: '@@player/NEW_PLAYER_FAILURE',
  error: Error
}

export interface ExitPlayerRequestAction extends Action {
  type: '@@player/EXIT_PLAYER_REQUEST'
}

export interface ExitPlayerSuccessAction extends Action {
  type: '@@player/EXIT_PLAYER_SUCCESS',
}

export interface ExitPlayerFailureAction extends Action {
  type: '@@player/EXIT_PLAYER_FAILURE',
  error: Error
}

export interface AddPlayerAction extends Action {
  type: '@@player/ADD_PLAYER',
  player: PlayerData
}

export interface RemovePlayerAction extends Action {
  type: '@@player/REMOVE_PLAYER',
  player: PlayerData
}

export type PlayerAction = SetPlayersAction
  | NewPlayerRequestAction | NewPlayerSuccessAction | NewPlayerFailureAction
  | ExitPlayerRequestAction | ExitPlayerSuccessAction | ExitPlayerFailureAction
  | AddPlayerAction | RemovePlayerAction;
