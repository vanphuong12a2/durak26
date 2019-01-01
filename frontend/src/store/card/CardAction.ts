import {Action} from 'redux';
import Card from '../../models/Card';

export interface SetPlayingPlayerCardsAction extends Action {
  type: '@@card/SET_PLAYING_PLAYER_CARDS',
  cards: Card[]
}

export type CardAction = SetPlayingPlayerCardsAction;
