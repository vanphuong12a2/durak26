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
import apiFetch from '../../common/apiFetch';


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
    return apiFetch(`/game/${gameId}`,
      {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(payload => {
        dispatch(loadGameSuccess());
        dispatch(setPlayers(payload.players))
      })
      .catch(ex =>
        dispatch(loadGameFailure(ex))
      )
  }
}
