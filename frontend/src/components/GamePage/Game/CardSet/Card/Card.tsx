import React from 'react';
import * as cards from '../../../../../images/index';
import {CardData, hiddenCard} from '../../../../../models/CardsMap';
import './Card.scss';

interface Props {
  card: CardData
}

const Card = (props: Props) => {
  if(props.card === hiddenCard) {
    return (
      <img className='card' src={cards.back}/>
    )
  } else {
    // @ts-ignore
    const cardSvg = cards[`_${props.card}`];
    return (
      <img className='card' src={cardSvg}/>
    );
  }
};

export default Card;
