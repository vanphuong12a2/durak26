import {ActionCreator} from 'redux';
import {SetCardsAction} from './CardAction';
import {CardsMap} from '../../models/CardsMap';

export const setCards: ActionCreator<SetCardsAction> = (cards: CardsMap) => ({
  type: '@@card/SET_CARDS',
  cards
});
