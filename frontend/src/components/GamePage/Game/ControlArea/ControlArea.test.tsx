import React from 'react';
import {create} from 'react-test-renderer';
import ControlArea from './ControlArea';

describe('<ControlArea />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<ControlArea
        playing={false}
        exitGameFunction={jest.fn()}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
