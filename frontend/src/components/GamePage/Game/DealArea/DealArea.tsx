import React from 'react';
import {Card, FaceUpCard} from '../CardSet/Card/Card';
import {FaceDownCardSet} from '../CardSet/CardSet';
import './DealArea.scss';

interface Props {
  numberOfCardsToDeal: number
  trumpCard: Card
}

const DealArea = (props: Props) => {
  return (
    <div className='deal-area'>
      <FaceDownCardSet numberOfCards={props.numberOfCardsToDeal}/>
      <FaceUpCard card={props.trumpCard}/>
    </div>
  );
};

export default DealArea;
