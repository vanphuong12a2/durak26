import React from 'react';
import ControlArea from './ControlArea/ControlArea';
import DealArea from './DealArea/DealArea';
import Table from './Table/Table';
import PlayerArea from './PlayerArea/PlayerArea';
import {Card} from './CardSet/Card/Card';
import './Game.scss';


interface Props {
  numberOfCardsToDeal: number
  trumpCard: Card
}
const Game = (props: Props) => {
  return (
    <div className='game'>
      <ControlArea/>
      <DealArea
        numberOfCardsToDeal={props.numberOfCardsToDeal}
        trumpCard={props.trumpCard}
      />
      <PlayerArea position='top'/>
      <PlayerArea position='left'/>
      <PlayerArea position='right'/>
      <PlayerArea position='bottom'/>
      <Table/>
    </div>
  );
};

export default Game;
