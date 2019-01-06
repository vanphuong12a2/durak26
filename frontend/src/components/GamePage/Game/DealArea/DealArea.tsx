import React from 'react';
import './DealArea.scss';
import CardSet from '../CardSet/CardSet';
import CardData from '../../../../models/CardData';
import Card from '../CardSet/Card/Card';

interface Props {
  cardsToDeal: CardData[]
  trumpCard?: CardData
}

const DealArea = (props: Props) => {
  return (
    <div className='deal-area'>
      <CardSet cards={props.cardsToDeal}/>
      {props.trumpCard && <Card card={props.trumpCard}/>}
    </div>
  );
};

export default DealArea;
