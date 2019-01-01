import React from 'react';
import {create} from 'react-test-renderer';
import PlayerArea from './PlayerArea';
import Player from '../../../../models/Player';

describe('<PlayerArea />', () => {

  describe('Snapshots', () => {
    it('renders empty player area correctly', () => {
      const component = create(<PlayerArea
        position={0}
        playingPlayerCards={[]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders player area with cards correctly', () => {
      const component = create(<PlayerArea
        position={0}
        player={new Player('1', 'Luffy', 2)}
        playingPlayerCards={[]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
