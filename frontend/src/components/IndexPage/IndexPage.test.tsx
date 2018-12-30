import React from 'react';
import {create} from 'react-test-renderer';
import IndexPage from './IndexPage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../store';

const store = createStore(rootReducer);

describe('<IndexPage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Provider store={store}><IndexPage/></Provider>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
