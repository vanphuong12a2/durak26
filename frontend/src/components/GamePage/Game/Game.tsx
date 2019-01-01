import React from 'react';
import ControlArea from './ControlArea/ControlArea';
import DealArea from './DealArea/DealArea';
import PlayerArea from './PlayerArea/PlayerArea';
import Player from '../../../models/Player';
import Card from '../../../models/Card';
import Table from './Table/Table';
import './Game.scss';


export interface GameProps {
  gameId: string
  loading: boolean
  error?: Error
  numberOfCardsToDeal: number
  trumpCard?: Card
  tableCards: Card[]
  playingPlayerCards: Card[]
  players: Player[]
  playingPlayerId?: string
  loadGameFunction: (gameId: string) => void
  joinGameFunction: (gameId: string) => void
}

class Game extends React.Component<GameProps> {

  public componentDidMount() {
    this.props.loadGameFunction(this.props.gameId);
    this.props.joinGameFunction(this.props.gameId);
  }

  public render = () => {
    if(this.props.loading) {
      return (<div>Loading...</div>);
    }

    if(this.props.error) {
      return (<div>There is an error!</div>);
    }
    return (
      <div className='game'>
        <ControlArea/>
        <DealArea
          numberOfCardsToDeal={this.props.numberOfCardsToDeal}
          trumpCard={this.props.trumpCard}
        />
        {this.getPlayerAreas()}
        <Table
          cards={this.props.tableCards}
        />
      </div>
    );
  };

  private getPlayerAreas() {
    return new Array(4).fill(0).map((value, index) => {
      const player = index < this.props.players.length ? this.props.players[index] : undefined;
      return (
        <PlayerArea
          key={index}
          position={index}
          player={player}
          playingPlayerCards={this.props.playingPlayerCards}
          playingPlayerId={this.props.playingPlayerId}
        />);
    });
  }
}

export default Game;
