import React from 'react';
import {create} from 'react-test-renderer';
import Game from './Game';
import {aCard} from '../../../common/TestData';
import Player from '../../../models/Player';

describe('<Game />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Game
        numberOfCardsToDeal={2}
        trumpCard={aCard}
        players={[
          new Player(0, 'Luffy', 2),
          new Player(1, 'Sanji', 25),
          new Player(2, 'Nami', 5),
          new Player(3, 'Robin', 0)
        ]}/>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
