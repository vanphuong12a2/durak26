import React from 'react';
import {create} from 'react-test-renderer';
import ControlArea from './ControlArea';

describe('<ControlArea />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const app = create(<ControlArea />);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
