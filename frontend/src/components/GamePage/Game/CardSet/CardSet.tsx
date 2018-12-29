import React from 'react';
import {Card} from './Card';

const CardComponent = (props: { card: Card }) => {
  return (
    <div>
      <g id='king_spade'/>
      ${props.card.id}</div>
  );
};

interface Props {
  cards: Card[]
}

const CardSet = (props: Props) => {
  return (
    <div>
      Card set
      {props.cards.forEach(card => <CardComponent card={card}/>)}
    </div>
  );
};


export default CardSet;
