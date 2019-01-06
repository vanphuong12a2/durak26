import React from 'react';
import {create} from 'react-test-renderer';
import Game from './Game';
import {aCard, anUnknownCard, cards} from '../../../common/TestData';
import PlayerData, {PlayerPosition} from '../../../models/PlayerData';
import {shallow} from 'enzyme';
import {CardPosition} from '../../../models/CardsMap';

describe('<Game />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const cardsMap = {
        [CardPosition.TO_DEAL]: [anUnknownCard],
        [CardPosition.HAND_BOTTOM]: [aCard],
        [CardPosition.TABLE]: [aCard, aCard],
      };
      const component = create(<Game
          gameId={'123'}
          loading={false}
          players={[
            new PlayerData('id1', 'Luffy', PlayerPosition.BOTTOM),
            new PlayerData('id2', 'Sanji', PlayerPosition.TOP),
            new PlayerData('id3', 'Nami', PlayerPosition.RIGHT),
          ]}
          cards={cardsMap}
          loadGameFunction={jest.fn()}
          joinGameFunction={jest.fn()}
        />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading state correctly', () => {
      const component = create(<Game
          gameId={'123'}
          loading={true}
          players={[]}
          cards={cards}
          loadGameFunction={jest.fn()}
          joinGameFunction={jest.fn()}
        />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading state correctly', () => {
      const component = create(<Game
          gameId={'123'}
          loading={false}
          error={new Error('someError')}
          players={[]}
          cards={cards}
          loadGameFunction={jest.fn()}
          joinGameFunction={jest.fn()}
        />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

  });

  it('should load players & try to join into the gameReducer on mounting', () => {
    const loadGameFunction = jest.fn();
    const joinGameFunction = jest.fn();
    shallow(
      <Game
        gameId={'123'}
        loading={false}
        players={[]}
        cards={cards}
        loadGameFunction={loadGameFunction}
        joinGameFunction={joinGameFunction}
      />
    );

    expect(loadGameFunction).toBeCalledTimes(1);
    // expect(joinGameFunction).toBeCalledTimes(1);
  });
});
