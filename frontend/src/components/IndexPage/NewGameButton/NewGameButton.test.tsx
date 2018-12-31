import React from 'react';
import {create} from 'react-test-renderer';
import NewGameButton from './NewGameButton';
import createMemoryHistory from 'history/createMemoryHistory';
import {shallow} from 'enzyme';

describe('<NewGameButton />', () => {

  const history = createMemoryHistory(undefined);
  const match = {params: [], isExact: false, path: '', url: ''};

  describe('Snapshots', () => {
    it('renders new game button correctly', () => {
      const component = create(
        <NewGameButton
          loading={false}
          newGameButtonOnClick={jest.fn()}
          history={history}
          location={history.location}
          match={match}
        />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading game correctly', () => {
      const component = create(<NewGameButton
        loading={true}
        newGameButtonOnClick={jest.fn()}
        history={history}
        location={history.location}
        match={match}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders error correctly', () => {
      const component = create(<NewGameButton
        loading={true}
        error={new Error('someError')}
        newGameButtonOnClick={jest.fn()}
        history={history}
        location={history.location}
        match={match}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it('should redirect to game page if gameId is available', () => {
    shallow(
      <NewGameButton
        gameId={123}
        loading={false}
        newGameButtonOnClick={jest.fn()}
        history={history}
        location={history.location}
        match={match}
      />);

    expect(history.location.pathname).toEqual('/play/123')
  });
});
