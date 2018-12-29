import React from 'react';
import {create} from 'react-test-renderer';
import {FaceDownCardSet, FaceUpCardSet} from './CardSet';

describe('<FaceUpCardSet />', () => {

  describe('Snapshots', () => {
    it('renders FaceUpCardSet correctly', () => {
      const component = create(<FaceUpCardSet cards={[]}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders FaceDownCardSet correctly', () => {
      const component = create(<FaceDownCardSet numberOfCards={4}/>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

});
