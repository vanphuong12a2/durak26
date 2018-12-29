import React from 'react';
import Game from '../components/GamePage/Game/Game';
import {Card} from '../components/GamePage/Game/CardSet/Card/Card';

const GameContainer = () => {
  return (
    <Game
      numberOfCardsToDeal={1}
      trumpCard={new Card('2', 'S')}
    />
  )
};

export default GameContainer;
