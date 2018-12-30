import React from 'react';
import {create} from 'react-test-renderer';
import Table from './Table';
import Card from '../../../../models/Card';

describe('<Table />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Table
        cards={[new Card('2', 'D'), new Card('7', 'S'), new Card('K', 'C')]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
