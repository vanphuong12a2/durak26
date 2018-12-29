import React from 'react';
import './GamePage.scss';
import GameContainer from '../../containers/GameContainer';

interface Props {
  match: { params: { gameId: string } }
}

const GamePage = (props: Props) => {
  return (
    <div className='game-page'>
      <span>Game ID: #{props.match.params.gameId}</span>
      <GameContainer/>
    </div>
  );
};

export default GamePage;
