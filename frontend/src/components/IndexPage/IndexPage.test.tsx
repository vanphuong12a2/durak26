import React from 'react';
import {create} from 'react-test-renderer';
import IndexPage from './IndexPage';


describe('<IndexPage />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const app = create(<IndexPage/>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
