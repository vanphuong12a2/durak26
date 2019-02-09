import React from 'react';
import CardSet from '../CardSet/CardSet';
import Card from '../CardSet/Card/Card';
import './DealArea.scss';
import {CardData} from '../../../../models/CardsMap';

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
