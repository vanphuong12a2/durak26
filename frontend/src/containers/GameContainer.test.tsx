import React from 'react';
import {mount} from 'enzyme';
import GameContainer from './GameContainer';
import Game from '../components/GamePage/Game/Game';
import {Provider} from 'react-redux';
import {testStore} from '../common/TestData';

describe('<GameContainer />', () => {

  it('should connect to Game correctly', () => {
    const component = mount(
      <Provider store={testStore}>
        <GameContainer gameId={'123'}/>
      </Provider>);

    expect(component.find(Game).length).toEqual(1);
  });
});
