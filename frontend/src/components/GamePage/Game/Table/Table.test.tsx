import React from 'react';
import {create} from 'react-test-renderer';
import Table from './Table';
import CardData from '../../../../models/CardData';

describe('<Table />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Table
        cards={[new CardData('2', 'D'), new CardData('7', 'S'), new CardData('K', 'C')]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
