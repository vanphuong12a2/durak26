import React from 'react';
import {create} from 'react-test-renderer';
import DealArea from './DealArea';
import {aCard} from '../../../../common/TestData';

describe('<DealArea />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<DealArea cardsToDeal={[aCard]} trumpCard={aCard}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
