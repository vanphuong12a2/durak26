import React from 'react';
import {create} from 'react-test-renderer';
import GamePage from './GamePage';
import {Provider} from 'react-redux';
import {testStore} from '../../common/TestData';

describe('<GamePage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const match = {params: {gameId: 'someId'}};
      const app = create(
        <Provider store={testStore}>
          <GamePage match={match}/>
        </Provider>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
