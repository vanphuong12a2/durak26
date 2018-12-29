import React from 'react';
import {create} from 'react-test-renderer';
import Game from './Game';
import {aCard} from '../../../common/TestData';

describe('<Game />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Game numberOfCardsToDeal={2} trumpCard={aCard}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
