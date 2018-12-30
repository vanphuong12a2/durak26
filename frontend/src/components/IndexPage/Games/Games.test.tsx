import React from 'react';
import {create} from 'react-test-renderer';
import Games from './Games';

describe('<Games />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Games playing={false}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders playing game correctly', () => {
      const component = create(<Games playing={true}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
