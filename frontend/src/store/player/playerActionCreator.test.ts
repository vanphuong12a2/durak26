import {aPlayer, freshTestStore} from '../../common/TestData';
import {exitPlayer, newPlayer} from './playerActionCreator';
import socket from '../../common/socket';

jest.mock('../../common/socket', () => {
  return {
    post: jest.fn(),
    delete: jest.fn()
  }
});
const testSocket: any = socket;

describe('player actions creator', () => {

  describe('new player async actions', () => {

    const gameId = '123';
    it('creates NEW_PLAYER_SUCCESS when adding player has been done', () => {
      testSocket.post.mockImplementation(
        (url: string, data: any, cb: (resData: any, jwres: any) => void) => cb(aPlayer, {statusCode: 200})
      );

      const expectedActions = [
        {type: '@@player/NEW_PLAYER_REQUEST'},
        {type: '@@player/NEW_PLAYER_SUCCESS', playerId: aPlayer.id},
        {type: '@@player/ADD_PLAYER', player: aPlayer},
      ];

      const store = freshTestStore();
      return store.dispatch(newPlayer(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates NEW_PLAYER_FAILURE when adding player has failed', () => {
      testSocket.post.mockImplementation(
        (url: string, data: any, cb: (resData: any, jwres: any) => void) => cb({}, {statusCode: 404})
      );

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

  describe('remove the current player async actions', () => {

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

    it('creates EXIT_PLAYER_FAILURE when removing the current player has failed', () => {
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
