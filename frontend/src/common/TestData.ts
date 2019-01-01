import {Card} from '../components/GamePage/Game/CardSet/Card/Card';
import createMockStore, {MockStoreCreator, MockStoreEnhanced} from 'redux-mock-store';
import {ApplicationState} from '../store/ApplicationState';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import Player from '../models/Player';

type DispatchExts = ThunkDispatch<ApplicationState, undefined, AnyAction>
const mockStoreCreator: MockStoreCreator<ApplicationState, DispatchExts> =
  createMockStore<ApplicationState, DispatchExts>([thunk]);

const getInitialApplicationState = () => (
  {
    game: {
      loading: false,
      newGame: {
        loading: false
      }
    },
    card: {
      numberOfCardsToDeal: 52,
      tableCards: [],
      playingPlayerCards: []
    },
    player: {
      players: [],
      playingPlayer: {
        loading: false
      }
    }
  }
);

export const aCard = new Card('2', 'D');
export const aPlayer = new Player('someId', 'some-name', 0);
export const freshTestStore = () => mockStoreCreator(getInitialApplicationState());
export const testStore: MockStoreEnhanced<ApplicationState, DispatchExts> = freshTestStore();
