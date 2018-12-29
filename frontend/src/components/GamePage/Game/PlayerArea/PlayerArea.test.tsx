import React from 'react';
import {create} from 'react-test-renderer';
import PlayerArea from './PlayerArea';

describe('<PlayerArea />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const app = create(<PlayerArea position='top'/>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
