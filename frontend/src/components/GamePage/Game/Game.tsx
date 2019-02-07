import React from 'react';
import ControlArea from './ControlArea/ControlArea';
import DealArea from './DealArea/DealArea';
import PlayerArea from './PlayerArea/PlayerArea';
import PlayerData, {PlayerPosition} from '../../../models/PlayerData';
import {CardsMap, getCardsToDeal, getPlayerCards, getTableCards, getTrumpCard} from '../../../models/CardsMap';
import Table from './Table/Table';
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
}

class Game extends React.Component<GameProps> {

  public componentDidMount() {
    this.props.loadGameFunction(this.props.gameId);

    if (!this.props.newPlayer.playerId) {
      this.props.joinGameFunction(this.props.gameId);
    }
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
        <ControlArea/>
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
    return [PlayerPosition.BOTTOM, PlayerPosition.TOP, PlayerPosition.LEFT, PlayerPosition.RIGHT]
      .map((playerPosition, index) => {
        const playerInPosition = this.props.players.find(player => player.position === playerPosition);
        const playerCards = playerInPosition ? getPlayerCards(this.props.cards, playerPosition) : [];
        return (
          <PlayerArea
            key={index}
            position={playerPosition}
            player={playerInPosition}
            playerCards={playerCards}
          />);
      });
  }
}

export default Game;
