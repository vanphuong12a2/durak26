import {ActionCreator, Dispatch} from 'redux';
import {
  AddGameFailureAction,
  AddGameRequestAction,
  AddGameSuccessAction,
  LoadGameFailureAction,
  LoadGameRequestAction,
  LoadGameSuccessAction
} from './GameAction';
import apiFetch from '../../common/apiFetch';
import {setCards} from '../card/cardActionCreator';
import {setPlayers} from '../player/playerActionCreator';
import socket from '../../common/socket';

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

export function addGame() {
  return (dispatch: Dispatch) => {
    dispatch(addGameRequest());
    return apiFetch('/game',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      })
      .then(payload => dispatch(addGameSuccess(payload.id)))
      .catch(ex => dispatch(addGameFailure(ex)))
  }
}

const loadGameRequest: ActionCreator<LoadGameRequestAction> = () => ({
  type: '@@game/LOAD_GAME_REQUEST'
});

const loadGameSuccess: ActionCreator<LoadGameSuccessAction> = () => ({
  type: '@@game/LOAD_GAME_SUCCESS'
});

const loadGameFailure: ActionCreator<LoadGameFailureAction> = (error: Error) => ({
  type: '@@game/LOAD_GAME_FAILURE',
  error
});

export function loadGame(gameId: string) {
  return (dispatch: Dispatch) => {
    dispatch(loadGameRequest());
    return new Promise((resolve) => socket.get(`/game/${gameId}`,
      (resData: any, jwres: any) => {
        if (jwres.statusCode === 200) {
          dispatch(setCards(resData.cards));
          dispatch(setPlayers(resData.players));
          dispatch(loadGameSuccess());
        } else {
          dispatch(loadGameFailure(new Error('Load game failed!')));
        }
        resolve();
      }));
  }
}

export function serveGame() {
  return (dispatch: Dispatch) => {
    dispatch(loadGameRequest());
    return new Promise((resolve) => socket.post(`/serve`,
      (resData: any, jwres: any) => {
        if (jwres.statusCode === 200) {
          dispatch(loadGameSuccess());
        } else {
          dispatch(loadGameFailure(new Error('Serve game failed!')));
        }
        resolve();
      }));
  }
}
