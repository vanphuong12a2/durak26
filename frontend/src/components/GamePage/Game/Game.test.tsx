import React from 'react';
import {create} from 'react-test-renderer';
import Game from './Game';
import {aCard} from '../../../common/TestData';
import Player from '../../../models/Player';
import {shallow} from 'enzyme';

describe('<Game />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<Game
        gameId={'123'}
        loading={false}
        numberOfCardsToDeal={2}
        trumpCard={aCard}
        tableCards={[]}
        playingPlayerCards={[]}
        players={[
          new Player('id1', 'Luffy', 2),
          new Player('id2', 'Sanji', 25),
          new Player('id3', 'Nami', 5),
          new Player('id4', 'Robin', 0)
        ]}
        loadGameFunction={jest.fn()}
        joinGameFunction={jest.fn()}/>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading state correctly', () => {
      const component = create(<Game
        gameId={'123'}
        loading={true}
        numberOfCardsToDeal={2}
        trumpCard={aCard}
        tableCards={[]}
        playingPlayerCards={[]}
        players={[]}
        loadGameFunction={jest.fn()}
        joinGameFunction={jest.fn()}/>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading state correctly', () => {
      const component = create(<Game
        gameId={'123'}
        loading={false}
        error={new Error('someError')}
        numberOfCardsToDeal={2}
        trumpCard={aCard}
        tableCards={[]}
        playingPlayerCards={[]}
        players={[]}
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
        numberOfCardsToDeal={2}
        trumpCard={aCard}
        tableCards={[]}
        playingPlayerCards={[]}
        players={[]}
        loadGameFunction={loadGameFunction}
        joinGameFunction={joinGameFunction}
      />
    );

    expect(loadGameFunction).toBeCalledTimes(1);
    expect(joinGameFunction).toBeCalledTimes(1);
  });
});
