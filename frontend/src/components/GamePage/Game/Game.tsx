import React from 'react';
import ControlArea from './ControlArea/ControlArea';
import DealArea from './DealArea/DealArea';
import PlayerArea from './PlayerArea/PlayerArea';
import Player from '../../../models/Player';
import Card from '../../../models/Card';
import Table from './Table/Table';
import './Game.scss';


export interface GameProps {
  numberOfCardsToDeal: number
  trumpCard: Card
  tableCards: Card[]
  players: Player[]
}

const Game = (props: GameProps) => {

  function getPlayerAreas() {
    return new Array(4).fill(0).map((value, index) => {
      if (index < props.players.length) {
        return (
          <PlayerArea
            key={index}
            position={index}
            player={props.players[index]}
          />);
      } else {
        return (
          <PlayerArea
            key={index}
            position={index}
          />);
      }
    });
  }

  return (
    <div className='game'>
      <ControlArea/>
      <DealArea
        numberOfCardsToDeal={props.numberOfCardsToDeal}
        trumpCard={props.trumpCard}
      />
      {getPlayerAreas()}
      <Table
        cards={props.tableCards}
      />
    </div>
  );
};

export default Game;
