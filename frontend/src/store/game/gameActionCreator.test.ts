import fetchMock from 'fetch-mock';
import {freshTestStore} from '../../common/TestData';
import {addGame, loadGame} from './gameActionCreator';

describe('game actions creator', () => {

  describe('add game async actions', () => {

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

    afterEach(() => {
      fetchMock.restore()
    });

    it('creates LOAD_GAME_SUCCESS when adding game has been done', () => {
      const gameId = '123';
      const gamePayload = {
        players: [{
          id: 'someId',
          name: 'someName',
          numberOfCards: 0
        }]
      };
      fetchMock.getOnce('/game/123', {
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(gamePayload)
      });

      const expectedActions = [
        {type: '@@game/LOAD_GAME_REQUEST'},
        {type: '@@game/LOAD_GAME_SUCCESS'},
        {type: '@@player/SET_PLAYERS', players: gamePayload.players}
      ];

      const store = freshTestStore();
      return store.dispatch(loadGame(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates LOAD_GAME_FAILURE when loading game has failed', () => {
      const gameId = '123';
      fetchMock.getOnce('/game/123', {status: 404});

      const expectedActions = [
        {type: '@@game/LOAD_GAME_REQUEST'},
        {type: '@@game/LOAD_GAME_FAILURE', error: new Error('Status code is not 200')}
      ];

      const store = freshTestStore();
      return store.dispatch(loadGame(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
});
