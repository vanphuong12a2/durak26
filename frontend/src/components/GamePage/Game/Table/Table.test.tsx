import React from 'react';
import {create} from 'react-test-renderer';
import Table from './Table';

describe('<Table />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const app = create(<Table/>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
