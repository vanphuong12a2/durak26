import fetchMock from 'fetch-mock';
import {freshTestStore} from '../../common/TestData';
import {exitPlayer, newPlayer} from './playerActionCreator';
import socket from '../../common/socket';

jest.mock('../../common/socket', () => {
  return {
    delete: jest.fn()
  }
});
const testSocket: any = socket;

describe('player actions creator', () => {

  describe('add player async actions', () => {

    afterEach(() => {
      fetchMock.restore()
    });

    const gameId = '123';
    it('creates ADD_PLAYER_SUCCESS when adding player has been done', () => {
      fetchMock.postOnce('/player', {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          id: '123',
          name: '123',
          numberOfCards: 0,
          cards: [{value: '1', suit: 'H'}]
        })
      });

      const expectedActions = [
        {type: '@@player/NEW_PLAYER_REQUEST'},
        {type: '@@player/NEW_PLAYER_SUCCESS', playerId: '123'},
      ];

      const store = freshTestStore();
      return store.dispatch(newPlayer(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates ADD_PLAYER_FAILURE when adding player has failed', () => {
      fetchMock.postOnce('/player', {
        status: 404
      });

      const expectedActions = [
        {type: '@@player/NEW_PLAYER_REQUEST'},
        {type: '@@player/NEW_PLAYER_FAILURE', error: new Error('Status code is not 200')}
      ];

      const store = freshTestStore();

      return store.dispatch(newPlayer(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  });

  describe('remove player async actions', () => {

    afterEach(() => {
      fetchMock.restore()
    });

    it('creates EXIT_PLAYER_SUCCESS when removing the current player has been done', () => {
      testSocket.delete.mockImplementation(
        (url: string, cb: (resData: any, jwres: any) => void) => cb({}, {statusCode: 200})
      );

      const expectedActions = [
        {type: '@@player/EXIT_PLAYER_REQUEST'},
        {type: '@@player/EXIT_PLAYER_SUCCESS'},
      ];

      const store = freshTestStore();
      return store.dispatch(exitPlayer()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates EXIT_PLAYER_FAILURE when removing the  current player has failed', () => {
      testSocket.delete.mockImplementation(
        (url: string, cb: (resData: any, jwres: any) => void) => cb({}, {statusCode: 500})
      );

      const expectedActions = [
        {type: '@@player/EXIT_PLAYER_REQUEST'},
        {type: '@@player/EXIT_PLAYER_FAILURE', error: new Error('Status code is not 200')}
      ];

      const store = freshTestStore();

      return store.dispatch(exitPlayer()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  });
});
