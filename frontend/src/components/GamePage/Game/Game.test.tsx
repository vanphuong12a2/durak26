import React from 'react';
import {create} from 'react-test-renderer';
import Game from './Game';
import {aCard, anUnknownCard, cards, testStore} from '../../../common/TestData';
import PlayerData, {PlayerPosition} from '../../../models/PlayerData';
import {shallow} from 'enzyme';
import {CardPosition} from '../../../models/CardsMap';
import {Provider} from 'react-redux';

describe('<Game />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const cardsMap = {
        [CardPosition.TO_DEAL]: [anUnknownCard],
        [CardPosition.HAND_BOTTOM]: [aCard],
        [CardPosition.TABLE]: [aCard, aCard],
      };
      const component = create(<Provider store={testStore}>
          <Game
            gameId={'123'}
            loading={false}
            newPlayer={{playerId: 'id1', loading: false}}
            players={[
              new PlayerData('id1', 'Luffy', PlayerPosition.BOTTOM),
              new PlayerData('id2', 'Sanji', PlayerPosition.TOP),
              new PlayerData('id3', 'Nami', PlayerPosition.RIGHT),
            ]}
            cards={cardsMap}
            loadGameFunction={jest.fn()}
            joinGameFunction={jest.fn()}
          />
        </Provider>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading state correctly', () => {
      const component = create(<Game
          gameId={'123'}
          loading={true}
          newPlayer={{playerId: 'somePlayer', loading: false}}
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
          newPlayer={{playerId: 'somePlayer', loading: false}}
          players={[]}
          cards={cards}
          loadGameFunction={jest.fn()}
          joinGameFunction={jest.fn()}
        />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

  });

  describe('Game component', () => {

    it('should load players & cards on mounting', () => {
      const loadGameFunction = jest.fn();
      shallow(
        <Game
          gameId={'123'}
          loading={false}
          players={[]}
          newPlayer={{loading: true}}
          cards={cards}
          loadGameFunction={loadGameFunction}
          joinGameFunction={jest.fn()}
        />
      );

      expect(loadGameFunction).toBeCalledTimes(1);
    });

    it('join game when playerId is not defined', () => {
      const joinGameFunction = jest.fn();
      shallow(
        <Game
          gameId={'123'}
          loading={false}
          players={[]}
          newPlayer={{loading: false}}
          cards={cards}
          loadGameFunction={jest.fn()}
          joinGameFunction={joinGameFunction}
        />
      );

      expect(joinGameFunction).toBeCalledTimes(1);
    });

    it('should NOT join game when playerId is defined', () => {
      const joinGameFunction = jest.fn();
      shallow(
        <Game
          gameId={'123'}
          loading={false}
          newPlayer={{playerId: 'somePlayer', loading: false}}
          players={[]}
          cards={cards}
          loadGameFunction={jest.fn()}
          joinGameFunction={joinGameFunction}
        />
      );

      expect(joinGameFunction).toBeCalledTimes(0);
    });
  });
});
