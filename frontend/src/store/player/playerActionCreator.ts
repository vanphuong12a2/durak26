import {ActionCreator, Dispatch} from 'redux';
import apiFetch from '../../common/apiFetch';
import {
  AddPlayerAction,
  ExitPlayerFailureAction,
  ExitPlayerRequestAction,
  ExitPlayerSuccessAction,
  NewPlayerFailureAction,
  NewPlayerRequestAction,
  NewPlayerSuccessAction,
  RemovePlayerAction,
  SetPlayersAction
} from './PlayerAction';
import PlayerData from '../../models/PlayerData';
import socket from '../../common/socket';

export const setPlayers: ActionCreator<SetPlayersAction> = (players: PlayerData[]) => ({
  type: '@@player/SET_PLAYERS',
  players
});


const addPlayerRequest: ActionCreator<NewPlayerRequestAction> = () => ({
  type: '@@player/NEW_PLAYER_REQUEST'
});


const addPlayerSuccess: ActionCreator<NewPlayerSuccessAction> = (playerId: string) => ({
  type: '@@player/NEW_PLAYER_SUCCESS',
  playerId
});

const addPlayerFailure: ActionCreator<NewPlayerFailureAction> = (error: Error) => ({
  type: '@@player/NEW_PLAYER_FAILURE',
  error
});

const exitPlayerRequest: ActionCreator<ExitPlayerRequestAction> = () => ({
  type: '@@player/EXIT_PLAYER_REQUEST'
});


const exitPlayerSuccess: ActionCreator<ExitPlayerSuccessAction> = () => ({
  type: '@@player/EXIT_PLAYER_SUCCESS'
});

const exitPlayerFailure: ActionCreator<ExitPlayerFailureAction> = (error: Error) => ({
  type: '@@player/EXIT_PLAYER_FAILURE',
  error
});

export const addPlayer: ActionCreator<AddPlayerAction> = (player: PlayerData) => ({
  type: '@@player/ADD_PLAYER',
  player
});

export const removePlayer: ActionCreator<RemovePlayerAction> = (player: PlayerData) => ({
  type: '@@player/REMOVE_PLAYER',
  player
});

export function newPlayer(gameId: string) {
  return (dispatch: Dispatch) => {
    dispatch(addPlayerRequest());
    return apiFetch('/player',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'player',
          gameId
        })
      })
      .then(payload => {
        dispatch(addPlayerSuccess(payload.id));
      })
      .catch(error => dispatch(addPlayerFailure(error)))
  }
}

export function exitPlayer() {
  return (dispatch: Dispatch) => {
    dispatch(exitPlayerRequest());
    return new Promise((resolve) => socket.delete(`/player/me`,
      (resData: any, jwres: any) => {
        if (jwres.statusCode === 200) {
          dispatch(exitPlayerSuccess());
        } else {
          dispatch(exitPlayerFailure(new Error('Status code is not 200')))
        }
        resolve();
      }))
  }
}
