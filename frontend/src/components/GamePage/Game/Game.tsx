import React from 'react';
import ControlArea from './ControlArea/ControlArea';
import DealArea from './DealArea/DealArea';
import Table from './Table/Table';
import PlayerArea from './PlayerArea/PlayerArea';
import './Game.scss';


const Game = () => {
  return (
    <div className='game'>
      <ControlArea/>
      <DealArea/>
      <PlayerArea position='top'/>
      <PlayerArea position='left'/>
      <PlayerArea position='right'/>
      <PlayerArea position='bottom'/>
      <Table/>
    </div>
  );
};

export default Game;
