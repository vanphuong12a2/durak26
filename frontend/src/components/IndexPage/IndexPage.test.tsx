import React from 'react';
import {create} from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import IndexPage from './IndexPage';

describe('<IndexPage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const component = create(<MemoryRouter><IndexPage/></MemoryRouter>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
