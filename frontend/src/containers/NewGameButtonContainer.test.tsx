import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import NewGameButton from '../components/IndexPage/NewGameButton/NewGameButton';
import NewGameButtonContainer from './NewGameButtonContainer';
import {testStore} from '../common/TestData';

describe('<NewGameButtonContainer />', () => {

  afterEach(() => {
    window.history.pushState({}, 'Test Title', '');
  });

  it('should connect to NewGameButton correctly', () => {
    const component = mount(
      <MemoryRouter>
        <Provider store={testStore}>
          <NewGameButtonContainer/>
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(NewGameButton).length).toEqual(1);
  });

  it('should dispatch add game action when clicked', async () => {

    const component = mount(
      <MemoryRouter>
        <Provider store={testStore}>
          <NewGameButtonContainer/>
        </Provider>
      </MemoryRouter>
    );

    component.find('#new-game-btn').simulate('click');

    expect(testStore.getActions()).toEqual([{type: '@@game/ADD_GAME_REQUEST'}]);
  });
});
