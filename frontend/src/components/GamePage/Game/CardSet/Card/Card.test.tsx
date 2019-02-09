import React from 'react';
import {create} from 'react-test-renderer';
import {aCard, aHiddenCard} from '../../../../../common/TestData';
import Card from './Card';

describe('<Card />', () => {

  describe('Snapshots', () => {
    it('renders face-up card correctly', () => {
      const component = create(<Card card={aCard}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders face-down card correctly', () => {
      const component = create(<Card card={aHiddenCard}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
