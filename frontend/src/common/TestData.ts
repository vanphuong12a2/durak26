import createMockStore, {MockStoreCreator, MockStoreEnhanced} from 'redux-mock-store';
import {ApplicationState} from '../store/ApplicationState';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import PlayerData, {PlayerPosition} from '../models/PlayerData';
import CardData, {UNKNOWN_VALUE} from '../models/CardData';
import {CardPosition, CardsMap} from '../models/CardsMap';

export const aCard = new CardData('2', 'D');
export const anUnknownCard = new CardData(UNKNOWN_VALUE, UNKNOWN_VALUE);
export const aPlayer = new PlayerData('someId', 'some-name', PlayerPosition.BOTTOM);

type DispatchExts = ThunkDispatch<ApplicationState, undefined, AnyAction>
const mockStoreCreator: MockStoreCreator<ApplicationState, DispatchExts> =
  createMockStore<ApplicationState, DispatchExts>([thunk]);

export const cards: CardsMap = {[CardPosition.TO_DEAL]: [anUnknownCard, anUnknownCard]};

const getInitialApplicationState = () => (
  {
    game: {
      loading: false,
      newGame: {
        loading: false
      }
    },
    card: {
      cards
    },
    player: {
      players: [],
      newPlayer: {
        loading: false
      }
    }
  }
);

export const freshTestStore = () => mockStoreCreator(getInitialApplicationState());
export const testStore: MockStoreEnhanced<ApplicationState, DispatchExts> = freshTestStore();
