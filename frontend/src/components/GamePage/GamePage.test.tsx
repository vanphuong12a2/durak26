import React from 'react';
import {create} from 'react-test-renderer';
import GamePage from './GamePage';
import {Provider} from 'react-redux';
import {testStore} from '../../common/TestData';
import {MemoryRouter} from 'react-router';

describe('<GamePage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const match = {params: {gameId: 'someId'}};
      const app = create(
        <MemoryRouter>
          <Provider store={testStore}>
            <GamePage match={match}/>
          </Provider>
        </MemoryRouter>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
