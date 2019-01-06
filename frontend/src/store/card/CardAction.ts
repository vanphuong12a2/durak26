import {Action} from 'redux';
import {CardsMap} from '../../models/CardsMap';

export interface SetCardsAction extends Action {
  type: '@@card/SET_CARDS',
  cards: CardsMap
}

export type CardAction = SetCardsAction;
