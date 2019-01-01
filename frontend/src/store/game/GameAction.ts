import {Action} from 'redux';

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

export interface LoadGameRequestAction extends Action {
  type: '@@game/LOAD_GAME_REQUEST'
}

export interface LoadGameSuccessAction extends Action {
  type: '@@game/LOAD_GAME_SUCCESS'
}

export interface LoadGameFailureAction extends Action {
  type: '@@game/LOAD_GAME_FAILURE',
  error: Error
}

export type GameAction = AddGameRequestAction | AddGameSuccessAction | AddGameFailureAction
  | LoadGameRequestAction | LoadGameSuccessAction | LoadGameFailureAction;
