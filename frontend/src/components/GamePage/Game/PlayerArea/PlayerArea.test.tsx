import React from 'react';
import {create} from 'react-test-renderer';
import PlayerArea from './PlayerArea';
import {aPlayer} from '../../../../common/TestData';
import {PlayerPosition} from '../../../../common/PlayerPosition';

describe('<PlayerArea />', () => {

  describe('Snapshots', () => {
    it('renders empty player area correctly', () => {
      const component = create(<PlayerArea
        player={aPlayer}
        position={PlayerPosition.RIGHT}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders player area with cards correctly', () => {
      const component = create(<PlayerArea
        player={aPlayer}
        position={PlayerPosition.BOTTOM}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
