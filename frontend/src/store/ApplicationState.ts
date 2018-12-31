import Player from '../models/Player';
import Card from '../models/Card';

export interface ApplicationState {
  card: CardState
  player: PlayerState
  game: GameState
}

export interface PlayerState {
  players: Player[]
  playingPlayerId?: number
}

export interface CardState {
  numberOfCardsToDeal: number,
  trumpCard?: Card
  tableCards: Card[]
  playingPlayerCards: Card[]
}

export interface GameState {
  newGame: {
    gameId?: number
    loading: boolean
    error?: Error
  }
}
