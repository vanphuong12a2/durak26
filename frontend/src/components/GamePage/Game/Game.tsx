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
  playingPlayerCards: Card[]
  players: Player[]
}

const Game = (props: GameProps) => {

  function getPlayerAreas() {
    return new Array(4).fill(0).map((value, index) => {
      const player = index < props.players.length ? props.players[index] : undefined;
      return (
        <PlayerArea
          key={index}
          position={index}
          player={player}
          playingPlayerCards={props.playingPlayerCards}
        />);
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
