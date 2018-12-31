import {ActionCreator, Dispatch} from 'redux';
import {setPlayers} from '../player/playerActionCreator';
import {
  AddGameFailureAction,
  AddGameRequestAction,
  AddGameSuccessAction,
  LoadGameFailureAction,
  LoadGameRequestAction,
  LoadGameSuccessAction
} from './GameAction';


const addGameRequest: ActionCreator<AddGameRequestAction> = () => ({
  type: '@@game/ADD_GAME_REQUEST'
});


const addGameSuccess: ActionCreator<AddGameSuccessAction> = (payload: { id: number }) => ({
  type: '@@game/ADD_GAME_SUCCESS',
  payload
});

const addGameFailure: ActionCreator<AddGameFailureAction> = (error: Error) => ({
  type: '@@game/ADD_GAME_FAILURE',
  error
});

export function addGame() {
  return (dispatch: Dispatch) => {
    dispatch(addGameRequest());
    return fetch('/game', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw new Error('Status code is not 200');
        }
      })
      .then(res => res.json())
      .then(payload => dispatch(addGameSuccess(payload)))
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
    return fetch(`/game/${gameId}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw new Error('Status code is not 200');
        }
      })
      .then(res => res.json())
      .then(payload => {
        dispatch(loadGameSuccess());
        dispatch(setPlayers(payload.players))
      })
      .catch(ex => dispatch(loadGameFailure(ex)))
  }
}
