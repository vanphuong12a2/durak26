import React from 'react';
import {create} from 'react-test-renderer';
import DealArea from './DealArea';

describe('<DealArea />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const app = create(<DealArea/>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
