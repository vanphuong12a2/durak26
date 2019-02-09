import React from 'react';
import {create} from 'react-test-renderer';
import Table from './Table';
import {aCard, anotherCard} from '../../../../common/TestData';

describe('<Table />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Table
        cards={[aCard, anotherCard]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
