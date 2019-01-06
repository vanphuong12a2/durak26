import React from 'react';
import * as cards from '../../../../../images/index';
import CardData, {UNKNOWN_VALUE} from '../../../../../models/CardData';
import './Card.scss';

interface Props {
  card: CardData
}

const Card = (props: Props) => {
  if(props.card.value === UNKNOWN_VALUE) {
    return (
      <img className='card' src={cards.back}/>
    )
  } else {
    // @ts-ignore
    const cardSvg = cards[`_${props.card.value}${props.card.suit}`];
    return (
      <img className='card' src={cardSvg}/>
    );
  }
};

export default Card;
