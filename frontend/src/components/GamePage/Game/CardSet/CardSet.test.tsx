import React from 'react';
import {create} from 'react-test-renderer';
import CardSet from './CardSet';
import {aCard, aHiddenCard} from '../../../../common/TestData';

describe('<CardSet />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<CardSet cards={[aCard, aHiddenCard]}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
