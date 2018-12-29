import React from 'react';
import {mount} from 'enzyme';
import GameContainer from './GameContainer';
import Game from '../components/GamePage/Game/Game';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

describe('<GameContainer />', () => {

  it('should connect to Game correctly', () => {
    const component = mount(<Provider store={store}><GameContainer/></Provider>);

    expect(component.find(Game).length).toEqual(1);
  });
});
