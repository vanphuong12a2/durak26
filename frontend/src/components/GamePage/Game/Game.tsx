import React from 'react';
import DealArea from './DealArea/DealArea';
import PlayerArea from './PlayerArea/PlayerArea';
import PlayerData from '../../../models/PlayerData';
import {CardsMap, getCardsToDeal, getTableCards, getTrumpCard} from '../../../models/CardsMap';
import Table from './Table/Table';
import ControlAreaContainer from '../../../containers/ControlAreaContainer';
import {allPlayerPositions} from '../../../common/PlayerPosition';
import socket from '../../../common/socket';
import './Game.scss';

export interface GameProps {
  gameId: string
  loading: boolean
  error?: Error
  newPlayer: {
    playerId?: string
    loading: boolean
    error?: Error
  }
  players: PlayerData[]
  cards: CardsMap
  loadGameFunction: (gameId: string) => void
  joinGameFunction: (gameId: string) => void
  addPlayerFunction: (player: PlayerData) => void
  removePlayerFunction: (player: PlayerData) => void
}

class Game extends React.Component<GameProps> {

  public componentDidMount() {

    this.props.loadGameFunction(this.props.gameId);
    this.props.joinGameFunction(this.props.gameId);

    socket.on('addPlayer', (player: PlayerData) => {
      console.log('Player `' + player.id + '` joined the party!');
      this.props.addPlayerFunction(player);
    });

    socket.on('removePlayer', (player: PlayerData) => {
      console.log('Player `' + player.id + '` left the party!');
      this.props.removePlayerFunction(player);
    });

    socket.on('updateGame', () => {
      console.log('Game `' + this.props.gameId + '` got updated!');
      this.props.loadGameFunction(this.props.gameId);
    });
  }

  public render = () => {
    if (this.props.loading) {
      return (<div>Loading...</div>);
    }

    if (this.props.error) {
      return (<div>There is an error!</div>);
    }

    return (
      <div className='game'>
        <ControlAreaContainer/>
        <DealArea
          trumpCard={getTrumpCard(this.props.cards)}
          cardsToDeal={getCardsToDeal(this.props.cards)}
        />
        {this.getPlayerAreas()}
        <Table
          cards={getTableCards(this.props.cards)}
        />
      </div>
    );
  };

  private getPlayerAreas = () => {
    return allPlayerPositions
      .map((playerPosition, index) => {
        return (
          <PlayerArea
            key={index}
            position={playerPosition}
            player={this.props.players[index]}
          />);
      });
  }

}

export default Game;
