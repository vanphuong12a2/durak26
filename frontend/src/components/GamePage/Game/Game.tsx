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
  playing: boolean
  currentPlayer: {
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

    const getPlayer = (index: number) => {
      const currentPlayer = this.props.currentPlayer;
      if (currentPlayer && index < this.props.players.length) {
        const currentPlayerIndex = this.props.players.findIndex(player => player.id === currentPlayer.playerId);
        const shiftedIndex = currentPlayerIndex - index;
        return this.props.players[shiftedIndex < 0 ? shiftedIndex + this.props.players.length : shiftedIndex]
      }
      return this.props.players[index];
    };

    return allPlayerPositions
      .map((playerPosition, index) => {
        return (
          <PlayerArea
            key={index}
            position={playerPosition}
            player={getPlayer(index)}
          />);
      });
  }

}

export default Game;
