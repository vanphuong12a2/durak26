import React from 'react';
import {create} from 'react-test-renderer';
import CardSet from './CardSet';
import {aCard, anUnknownCard} from '../../../../common/TestData';

describe('<CardSet />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<CardSet cards={[aCard, anUnknownCard]}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
