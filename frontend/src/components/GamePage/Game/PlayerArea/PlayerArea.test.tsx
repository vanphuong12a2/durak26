import React from 'react';
import {create} from 'react-test-renderer';
import PlayerArea from './PlayerArea';
import {aCard, aPlayer} from '../../../../common/TestData';
import {PlayerPosition} from '../../../../models/PlayerData';

describe('<PlayerArea />', () => {

  describe('Snapshots', () => {
    it('renders empty player area correctly', () => {
      const component = create(<PlayerArea
        position={PlayerPosition.RIGHT}
        playerCards={[]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders player area with cards correctly', () => {
      const component = create(<PlayerArea
        position={PlayerPosition.BOTTOM}
        player={aPlayer}
        playerCards={[aCard]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
