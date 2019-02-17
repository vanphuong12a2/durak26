import {ActionCreator, Dispatch} from 'redux';
import {
  AddGameFailureAction,
  AddGameRequestAction,
  AddGameSuccessAction,
  GameFailureAction,
  GameRequestAction,
  LoadGameSuccessAction,
  ServeGameSuccessAction
} from './GameAction';
import {setCards} from '../card/cardActionCreator';
import {setPlayers} from '../player/playerActionCreator';
import socket from '../../common/socket';


const gameRequest: ActionCreator<GameRequestAction> = () => ({
  type: '@@game/GAME_REQUEST'
});

const gameFailure: ActionCreator<GameFailureAction> = (error: Error) => ({
  type: '@@game/GAME_FAILURE',
  error
});

const addGameRequest: ActionCreator<AddGameRequestAction> = () => ({
  type: '@@game/ADD_GAME_REQUEST'
});


const addGameSuccess: ActionCreator<AddGameSuccessAction> = (gameId: string) => ({
  type: '@@game/ADD_GAME_SUCCESS',
  gameId
});

const addGameFailure: ActionCreator<AddGameFailureAction> = (error: Error) => ({
  type: '@@game/ADD_GAME_FAILURE',
  error
});

const loadGameSuccess: ActionCreator<LoadGameSuccessAction> = (playing: boolean) => ({
  type: '@@game/LOAD_GAME_SUCCESS',
  playing
});

const serveGameSuccess: ActionCreator<ServeGameSuccessAction> = () => ({
  type: '@@game/SERVE_GAME_SUCCESS'
});

export function addGame() {
  return (dispatch: Dispatch) => {
    dispatch(addGameRequest());
    return new Promise((resolve) => socket.post(`/game`,
      {},
      (resData: any, jwres: any) => {
        if (jwres.statusCode === 200) {
          dispatch(addGameSuccess(resData.id));
        } else {
          dispatch(addGameFailure(new Error('Add game failed!')));
        }
        resolve();
      }));
  }
}


export function loadGame(gameId: string) {
  return (dispatch: Dispatch) => {
    dispatch(gameRequest());
    return new Promise((resolve) => socket.get(`/game/${gameId}`,
      (resData: any, jwres: any) => {
        if (jwres.statusCode === 200) {
          dispatch(setCards(resData.cards));
          dispatch(setPlayers(resData.players));
          dispatch(loadGameSuccess(resData.playing));
        } else {
          dispatch(gameFailure(new Error('Load game failed!')));
        }
        resolve();
      }));
  }
}

export function serveGame() {
  return (dispatch: Dispatch) => {
    dispatch(gameRequest());
    return new Promise((resolve) => socket.post(`/serve`,
      (resData: any, jwres: any) => {
        if (jwres.statusCode === 200) {
          dispatch(serveGameSuccess());
        } else {
          dispatch(gameFailure(new Error('Serve game failed!')));
        }
        resolve();
      }));
  }
}

export function getCurrentGame() {
  return (dispatch: Dispatch) => {
    dispatch(gameRequest());
    return new Promise((resolve) => socket.get(`/player/me`,
      (resData: any, jwres: any) => {
        if (jwres.statusCode === 200) {
          dispatch(addGameSuccess(resData.gameId));
        } else {
          dispatch(gameFailure(new Error('Get current game failed!')));
        }
        resolve();
      }));
  }
}
