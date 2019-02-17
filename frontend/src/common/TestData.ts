import createMockStore, {MockStoreCreator, MockStoreEnhanced} from 'redux-mock-store';
import {ApplicationState} from '../store/ApplicationState';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import PlayerData from '../models/PlayerData';
import {CardData, CardPosition, CardsMap, hiddenCard} from '../models/CardsMap';

export const aCard: CardData = '2D';
export const anotherCard: CardData = 'KS';
export const aHiddenCard = hiddenCard;
export const aPlayer = new PlayerData('someId', 'someName', [aCard]);
export const anotherPlayer = new PlayerData('someOtherId', 'someOtherName', [anotherCard]);

type DispatchExts = ThunkDispatch<ApplicationState, undefined, AnyAction>
const mockStoreCreator: MockStoreCreator<ApplicationState, DispatchExts> =
  createMockStore<ApplicationState, DispatchExts>([thunk]);

export const cards: CardsMap = {[CardPosition.TO_DEAL]: [aHiddenCard, aHiddenCard]};

export const getInitialApplicationState = () => (
  {
    game: {
      loading: false,
      newGame: {
        loading: false
      },
      playing: false
    },
    card: {
      cards
    },
    player: {
      players: [],
      currentPlayer: {
        loading: false
      }
    }
  }
);

export const freshTestStore = () => mockStoreCreator(getInitialApplicationState());
export const testStore: MockStoreEnhanced<ApplicationState, DispatchExts> = freshTestStore();
