import React from 'react';
import {Card, FaceDownCard, FaceUpCard} from './Card/Card';
import './CardSet.scss';

interface Props {
  cards: Card[]
}

const FaceUpCardSet = (props: Props) => {
  return (
    <div className='card-set'>
      {props.cards.map((card, index) => <FaceUpCard key={index} card={card}/>)}
    </div>
  );
};

const FaceDownCardSet = (props: { numberOfCards: number }) => {
  return (
    <div className='card-set'>
      {
        new Array(props.numberOfCards).fill(0).map((value, index) => <FaceDownCard key={index}/>)
      }
    </div>
  );
};

export {FaceUpCardSet, FaceDownCardSet};
