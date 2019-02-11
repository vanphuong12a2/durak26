import fetchMock from 'fetch-mock';
import {cards, freshTestStore} from '../../common/TestData';
import {addGame, loadGame} from './gameActionCreator';
import socket from '../../common/socket';

jest.mock('../../common/socket', () => {
  return {
    get: jest.fn()
  }
});
const testSocket: any = socket;

describe('game actions creator', () => {

  describe('add game async actions', () => {

    afterEach(() => {
      fetchMock.restore()
    });

    it('creates ADD_GAME_SUCCESS when adding game has been done', () => {
      fetchMock.postOnce('/game', {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({id: '123'})
      });

      const expectedActions = [
        {type: '@@game/ADD_GAME_REQUEST'},
        {type: '@@game/ADD_GAME_SUCCESS', gameId: '123'}
      ];

      const store = freshTestStore();

      return store.dispatch(addGame()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates ADD_GAME_FAILURE when adding game has failed', () => {
      fetchMock.postOnce('/game', {
        status: 404
      });

      const expectedActions = [
        {type: '@@game/ADD_GAME_REQUEST'},
        {type: '@@game/ADD_GAME_FAILURE', error: new Error('Status code is not 200')}
      ];

      const store = freshTestStore();

      return store.dispatch(addGame()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  });

  describe('load game async actions', () => {

    it('creates LOAD_GAME_SUCCESS when adding game has been done', () => {
      const gameId = '123';

      const gamePayload = {
        players: [{
          id: 'someId',
          name: 'someName',
        }],
        cards
      };

      testSocket.get.mockImplementation(
        (url: string, cb: (resData: any, jwres: any) => void) => cb(gamePayload, {statusCode: 200, body: gamePayload})
      );

      const expectedActions = [
        {type: '@@game/LOAD_GAME_REQUEST'},
        {type: '@@card/SET_CARDS', cards: gamePayload.cards},
        {type: '@@player/SET_PLAYERS', players: gamePayload.players},
        {type: '@@game/LOAD_GAME_SUCCESS'},
      ];

      const store = freshTestStore();
      return store.dispatch(loadGame(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates LOAD_GAME_FAILURE when loading game has failed', () => {
      const gameId = '123';

      testSocket.get.mockImplementation(
        (url: string, cb: (resData: any, jwres: any) => void) => cb({}, {statusCode: 404})
      );

      const expectedActions = [
        {type: '@@game/LOAD_GAME_REQUEST'},
        {type: '@@game/LOAD_GAME_FAILURE', error: new Error('Load game failed!')}
      ];

      const store = freshTestStore();
      return store.dispatch(loadGame(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  });
});
