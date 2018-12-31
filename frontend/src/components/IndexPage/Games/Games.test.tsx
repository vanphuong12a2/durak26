import React from 'react';
import {create} from 'react-test-renderer';
import Games from './Games';
import {MemoryRouter} from 'react-router';

describe('<Games />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(
        <MemoryRouter>
          <Games
            gameId={123}
            loading={false}
            newGameButtonOnClick={jest.fn()}
          />
        </MemoryRouter>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders loading game correctly', () => {
      const component = create(<Games
        loading={true}
        newGameButtonOnClick={jest.fn()}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders error correctly', () => {
      const component = create(<Games
        loading={true}
        error={new Error('some-error')}
        newGameButtonOnClick={jest.fn()}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
