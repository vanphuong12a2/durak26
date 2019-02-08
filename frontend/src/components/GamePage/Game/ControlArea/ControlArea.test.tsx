import React from 'react';
import {create} from 'react-test-renderer';
import {shallow} from 'enzyme';
import ControlArea from './ControlArea';
import createMemoryHistory from 'history/createMemoryHistory';

describe('<ControlArea />', () => {

  const history = createMemoryHistory(undefined);
  const match = {params: [], isExact: false, path: '', url: ''};

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<ControlArea
        playing={false}
        exitGameFunction={jest.fn()}
        history={history}
        location={history.location}
        match={match}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('exit button', () => {

    it('should redirect to homepage', () => {

      history.location.pathname = '/play/gameId';

      const controlArea = shallow(<ControlArea
        playing={false}
        exitGameFunction={jest.fn()}
        history={history}
        location={history.location}
        match={match}
      />);

      controlArea.find('#exit-game-btn').simulate('click');

      expect(history.location.pathname).toEqual('/')
    });
  })
});
