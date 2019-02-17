import {Action} from 'redux';

export interface GameRequestAction extends Action {
  type: '@@game/GAME_REQUEST'
}

export interface GameFailureAction extends Action {
  type: '@@game/GAME_FAILURE',
  error: Error
}

export interface AddGameRequestAction extends Action {
  type: '@@game/ADD_GAME_REQUEST'
}

export interface AddGameSuccessAction extends Action {
  type: '@@game/ADD_GAME_SUCCESS',
  gameId: string
}

export interface AddGameFailureAction extends Action {
  type: '@@game/ADD_GAME_FAILURE',
  error: Error
}

export interface LoadGameSuccessAction extends Action {
  type: '@@game/LOAD_GAME_SUCCESS',
  playing: boolean
}

export interface ServeGameSuccessAction extends Action {
  type: '@@game/SERVE_GAME_SUCCESS',
}

export type GameAction = GameRequestAction | GameFailureAction
  | AddGameRequestAction | AddGameSuccessAction | AddGameFailureAction
  | LoadGameSuccessAction | ServeGameSuccessAction;
