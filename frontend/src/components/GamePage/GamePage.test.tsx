import React from 'react';
import {create} from 'react-test-renderer';
import GamePage from './GamePage';


describe('<GamePage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const match = {params: {gameId: 'someId'}};
      const app = create(<GamePage match={match}/>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
