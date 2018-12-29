import React from 'react';
import {create} from 'react-test-renderer';
import DealArea from './DealArea';
import {aCard} from '../../../../common/TestData';

describe('<DealArea />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<DealArea numberOfCardsToDeal={4} trumpCard={aCard}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
