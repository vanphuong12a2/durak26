import React from 'react';
import * as cards from '../../../../../images/index';
import './Card.scss';
import Card from '../../../../../models/Card';

interface Props {
  card: Card
}

const FaceUpCard = (props: Props) => {
  // @ts-ignore
  const cardSvg = cards[props.card.getSvg()];
  return (
    <img className='card' src={cardSvg}/>
  );
};

const FaceDownCard = () => {
  return (
    <img className='card' src={cards.back}/>
  )
};


export {Card, FaceUpCard, FaceDownCard};
