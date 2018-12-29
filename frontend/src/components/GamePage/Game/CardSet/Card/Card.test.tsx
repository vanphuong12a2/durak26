import React from 'react';
import {create} from 'react-test-renderer';
import {FaceDownCard, FaceUpCard} from './Card';
import {aCard} from '../../../../../common/TestData';

describe('<FaceUpCard />', () => {

  describe('Snapshots', () => {
    it('renders face-up card correctly', () => {
      const component = create(<FaceUpCard card={aCard}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders face-down card correctly', () => {
      const component = create(<FaceDownCard/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
