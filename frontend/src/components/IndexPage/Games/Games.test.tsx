import React from 'react';
import {create} from 'react-test-renderer';
import Games from './Games';
import createMemoryHistory from 'history/createMemoryHistory';
import {shallow} from 'enzyme';

describe('<Games />', () => {

  const history = createMemoryHistory(undefined);
  const match = {params: [], isExact: false, path: '', url: ''};

  describe('Snapshots', () => {
    it('renders new game button correctly', () => {
      const component = create(
        <Games
          loading={false}
          newGameButtonOnClick={jest.fn()}
          history={history}
          location={history.location}
          match={match}
        />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading game correctly', () => {
      const component = create(<Games
        loading={true}
        newGameButtonOnClick={jest.fn()}
        history={history}
        location={history.location}
        match={match}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders error correctly', () => {
      const component = create(<Games
        loading={true}
        error={new Error('some-error')}
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
      <Games
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
