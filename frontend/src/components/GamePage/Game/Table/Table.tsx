import React from 'react';
import './Table.scss';
import Card from '../../../../models/Card';
import {FaceUpCardSet} from '../CardSet/CardSet';

interface Props {
  cards: Card[]
}

const Table = (props: Props) => {
  const defendingState = props.cards.length % 2 !== 0;
  const defendSetClassName = defendingState ? 'defend-set defending' : 'defend-set';
  const attackCards = props.cards.filter((card, index) => index % 2 === 0);
  const defendCards = props.cards.filter((card, index) => index % 2 !== 0);
  if (defendingState) {
    const finalHiddenCard = new Card('7', 'S');
    defendCards.push(finalHiddenCard);
  }

  return (
    <div className='table'>
      <div className='table-inside'>
        <div className='table-content'>

          <div className='attack-set'>
            <FaceUpCardSet cards={attackCards}/>
          </div>
          <div className={defendSetClassName}>
            <FaceUpCardSet cards={defendCards}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Table;
