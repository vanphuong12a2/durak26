import {cards, freshTestStore} from '../../common/TestData';
import {addGame, loadGame} from './gameActionCreator';
import socket from '../../common/socket';

jest.mock('../../common/socket', () => {
  return {
    get: jest.fn(),
    post: jest.fn()
  }
});
const testSocket: any = socket;

describe('game actions creator', () => {

  describe('add game async actions', () => {

    it('creates ADD_GAME_SUCCESS when adding game has been done', () => {
      testSocket.post.mockImplementation(
        (url: string, data: any, cb: (resData: any, jwres: any) => void) => cb({id: '123'}, {statusCode: 200})
      );

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
      testSocket.post.mockImplementation(
        (url: string, data: any, cb: (resData: any, jwres: any) => void) => cb({}, {statusCode: 404})
      );

      const expectedActions = [
        {type: '@@game/ADD_GAME_REQUEST'},
        {type: '@@game/ADD_GAME_FAILURE', error: new Error('Add game failed!')}
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
        cards,
        playing: true
      };

      testSocket.get.mockImplementation(
        (url: string, cb: (resData: any, jwres: any) => void) => cb(gamePayload, {statusCode: 200, body: gamePayload})
      );

      const expectedActions = [
        {type: '@@game/GAME_REQUEST'},
        {type: '@@card/SET_CARDS', cards: gamePayload.cards},
        {type: '@@player/SET_PLAYERS', players: gamePayload.players},
        {type: '@@game/LOAD_GAME_SUCCESS', playing: true},
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
        {type: '@@game/GAME_REQUEST'},
        {type: '@@game/GAME_FAILURE', error: new Error('Load game failed!')}
      ];

      const store = freshTestStore();
      return store.dispatch(loadGame(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  });
});
