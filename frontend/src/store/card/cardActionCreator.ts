import {ActionCreator} from 'redux';
import {SetPlayingPlayerCardsAction} from './CardAction';
import Card from '../../models/Card';

export const setPlayingPlayerCards: ActionCreator<SetPlayingPlayerCardsAction> = (cards: Card[]) => ({
  type: '@@card/SET_PLAYING_PLAYER_CARDS',
  cards
});
