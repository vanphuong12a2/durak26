import React from 'react';
import Game from './Game/Game';
import './GamePage.scss';

interface Props {
  match: { params: { gameId: string } }
}

const GamePage = (props: Props) => {
  return (
    <div className='game-page'>
      <span>Game ID: #{props.match.params.gameId}</span>
      <Game/>
    </div>
  );
};

export default GamePage;
