import playerReducer from './playerReducer';
import {aPlayer} from '../../common/TestData';

describe('player reducer', () => {

  it('should set players', () => {
    const players = [aPlayer];
    const playerStore = playerReducer(undefined, {type: '@@player/SET_PLAYERS', players});
    expect(playerStore.players).toEqual(players);
  })

});
