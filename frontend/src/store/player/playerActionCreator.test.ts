import fetchMock from 'fetch-mock';
import {freshTestStore} from '../../common/TestData';
import {addPlayer, removePlayer} from './playerActionCreator';

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
        {type: '@@player/ADD_PLAYER_REQUEST'},
        {type: '@@player/ADD_PLAYER_SUCCESS', playerId: '123'},
      ];

      const store = freshTestStore();
      return store.dispatch(addPlayer(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates ADD_PLAYER_FAILURE when adding player has failed', () => {
      fetchMock.postOnce('/player', {
        status: 404
      });

      const expectedActions = [
        {type: '@@player/ADD_PLAYER_REQUEST'},
        {type: '@@player/ADD_PLAYER_FAILURE', error: new Error('Status code is not 200')}
      ];

      const store = freshTestStore();

      return store.dispatch(addPlayer(gameId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  });

  describe('remove player async actions', () => {

    afterEach(() => {
      fetchMock.restore()
    });

    it('creates REMOVE_PLAYER_SUCCESS when adding player has been done', () => {
      fetchMock.deleteOnce('/player/me', {
        status: 200,
        body: JSON.stringify({})
      });

      const expectedActions = [
        {type: '@@player/REMOVE_PLAYER_REQUEST'},
        {type: '@@player/REMOVE_PLAYER_SUCCESS'},
      ];

      const store = freshTestStore();
      return store.dispatch(removePlayer()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    });

    it('creates REMOVE_PLAYER_FAILURE when adding player has failed', () => {
      fetchMock.deleteOnce('/player/me', {
        status: 500
      });

      const expectedActions = [
        {type: '@@player/REMOVE_PLAYER_REQUEST'},
        {type: '@@player/REMOVE_PLAYER_FAILURE', error: new Error('Status code is not 200')}
      ];

      const store = freshTestStore();

      return store.dispatch(removePlayer()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  });
});
