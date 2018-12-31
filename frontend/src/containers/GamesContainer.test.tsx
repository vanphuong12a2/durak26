import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../store/index';
import GamesContainer from './GamesContainer';
import Games from '../components/IndexPage/Games/Games';
import {MemoryRouter} from 'react-router';

const store = createStore(rootReducer);

describe('<GamesContainer />', () => {

  it('should connect to Game correctly', () => {
    const component = mount(<MemoryRouter>
      <Provider store={store}><GamesContainer/></Provider>
    </MemoryRouter>);

    expect(component.find(Games).length).toEqual(1);
  });
});
