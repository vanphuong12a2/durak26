import React from 'react';
import {create} from 'react-test-renderer';
import PlayerArea from './PlayerArea';

describe('<PlayerArea />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<PlayerArea position='top'/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
