import React from 'react';
import {create} from 'react-test-renderer';
import Game from './Game';

describe('<Game />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const app = create(<Game/>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
