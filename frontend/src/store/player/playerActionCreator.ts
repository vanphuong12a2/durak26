import {ActionCreator} from 'redux';
import {SetPlayersAction} from './PlayerAction';
import Player from '../../models/Player';

export const setPlayers: ActionCreator<SetPlayersAction> = (players: Player[]) => ({
  type: '@@player/SET_PLAYERS',
  players
});
