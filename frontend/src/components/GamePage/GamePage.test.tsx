import React from 'react';
import {create} from 'react-test-renderer';
import GamePage from './GamePage';
import {createStore} from 'redux';
import rootReducer from '../../reducers';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

describe('<GamePage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const match = {params: {gameId: 'someId'}};
      const app = create(<Provider store={store}><GamePage match={match}/></Provider>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
