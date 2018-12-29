import React from 'react';
import * as cards from '../../../../../images/index';
import './Card.scss';

class Card {
  public value: string;
  public suite: string;

  constructor(value: string, suite: string) {
    this.value = value;
    this.suite = suite;
  }

  public getSvg = () => `_${this.value}${this.suite}`;
}

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
