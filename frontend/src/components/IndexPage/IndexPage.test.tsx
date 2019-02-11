import React from 'react';
import {create} from 'react-test-renderer';
import IndexPage from './IndexPage';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import {testStore} from '../../common/TestData';

describe('<IndexPage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(
        <MemoryRouter>
          <Provider store={testStore}>
            <IndexPage/>
          </Provider>
        </MemoryRouter>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
