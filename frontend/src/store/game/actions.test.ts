import createMockStore, {MockStoreCreator, MockStoreEnhanced} from 'redux-mock-store';
import thunk, {ThunkDispatch} from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {addGame} from './actions';
import {AnyAction} from 'redux';
import {ApplicationState} from '../ApplicationState';

type DispatchExts = ThunkDispatch<ApplicationState, undefined, AnyAction>

describe('add game async actions', () => {

  const mockStoreCreator: MockStoreCreator<any, DispatchExts> =
    createMockStore<ApplicationState, DispatchExts>([thunk]);

  afterEach(() => {
    fetchMock.restore()
  });

  it('creates ADD_GAME_SUCCESS when adding game has been done', () => {
    fetchMock.postOnce('/game', {
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({id: 123})
    });

    const expectedActions = [
      {type: '@@game/ADD_GAME_REQUEST'},
      {type: '@@game/ADD_GAME_SUCCESS', payload: {id: 123}}
    ];

    const store: MockStoreEnhanced<any, DispatchExts> =
      mockStoreCreator({game: {}});

    return store.dispatch(addGame()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('creates ADD_GAME_FAILURE when adding game has been done', () => {
    fetchMock.postOnce('/game', {
      status: 404
    });

    const expectedActions = [
      {type: '@@game/ADD_GAME_REQUEST'},
      {type: '@@game/ADD_GAME_FAILURE', error: new Error('Status code is not 200')}
    ];

    const store: MockStoreEnhanced<any, DispatchExts> =
      mockStoreCreator({game: {}});

    return store.dispatch(addGame()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
