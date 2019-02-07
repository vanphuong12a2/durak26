import {ActionCreator, Dispatch} from 'redux';
import apiFetch from '../../common/apiFetch';
import {
  AddPlayerFailureAction,
  AddPlayerRequestAction,
  AddPlayerSuccessAction, RemovePlayerFailureAction,
  RemovePlayerRequestAction, RemovePlayerSuccessAction,
  SetPlayersAction
} from './PlayerAction';
import PlayerData from '../../models/PlayerData';

export const setPlayers: ActionCreator<SetPlayersAction> = (players: PlayerData[]) => ({
  type: '@@player/SET_PLAYERS',
  players
});


const addPlayerRequest: ActionCreator<AddPlayerRequestAction> = () => ({
  type: '@@player/ADD_PLAYER_REQUEST'
});


const addPlayerSuccess: ActionCreator<AddPlayerSuccessAction> = (playerId: string) => ({
  type: '@@player/ADD_PLAYER_SUCCESS',
  playerId
});

const addPlayerFailure: ActionCreator<AddPlayerFailureAction> = (error: Error) => ({
  type: '@@player/ADD_PLAYER_FAILURE',
  error
});

const removePlayerRequest: ActionCreator<RemovePlayerRequestAction> = () => ({
  type: '@@player/REMOVE_PLAYER_REQUEST'
});


const removePlayerSuccess: ActionCreator<RemovePlayerSuccessAction> = () => ({
  type: '@@player/REMOVE_PLAYER_SUCCESS'
});

const removePlayerFailure: ActionCreator<RemovePlayerFailureAction> = (error: Error) => ({
  type: '@@player/REMOVE_PLAYER_FAILURE',
  error
});

export function addPlayer(gameId: string) {
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
          name: 'Player name',
          gameId
        })
      })
      .then(payload => {
        dispatch(addPlayerSuccess(payload.id));
      })
      .catch(error => dispatch(addPlayerFailure(error)))
  }
}

export function removePlayer() {
  return (dispatch: Dispatch) => {
    dispatch(removePlayerRequest());
    return apiFetch(`/player/me`,
      {
        method: 'delete'
      })
      .then(() => dispatch(removePlayerSuccess()))
      .catch(ex =>
        dispatch(removePlayerFailure(ex))
      )
  }
}
