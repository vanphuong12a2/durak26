import React from 'react';
import {create} from 'react-test-renderer';
import CardSet from './CardSet';

describe('<CardSet />', () => {

  describe('Snapshots', () => {
    it('renders correctly', () => {
      const app = create(<CardSet cards={[]}/>);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });

});
