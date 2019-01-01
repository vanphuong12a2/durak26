import {ActionCreator, Dispatch} from 'redux';
import Player from '../../models/Player';
import apiFetch from '../../common/apiFetch';
import {setPlayingPlayerCards} from '../card/cardActionCreator';
import {AddPlayerFailureAction, AddPlayerRequestAction, AddPlayerSuccessAction, SetPlayersAction} from './PlayerAction';
import Card from '../../models/Card';

export const setPlayers: ActionCreator<SetPlayersAction> = (players: Player[]) => ({
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
        dispatch(setPlayingPlayerCards(payload.cards));
      })
      .catch(error => dispatch(addPlayerFailure(error)))
  }
}
