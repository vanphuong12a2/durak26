import React from 'react';
import {mount} from 'enzyme';
import GameContainer from './GameContainer';
import Game from '../components/GamePage/Game/Game';
import {Provider} from 'react-redux';
import {testStore} from '../common/TestData';
import {MemoryRouter} from 'react-router';

describe('<GameContainer />', () => {

  it('should connect to Game correctly', () => {
    const component = mount(
      <MemoryRouter>
        <Provider store={testStore}>
          <GameContainer gameId={'123'}/>
        </Provider>
      </MemoryRouter>);

    expect(component.find(Game).length).toEqual(1);
  });
});
