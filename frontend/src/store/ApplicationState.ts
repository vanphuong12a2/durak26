import Player from '../models/Player';
import Card from '../models/Card';

export interface ApplicationState {
  card: CardState
  player: PlayerState
  game: GameState
}

export interface PlayerState {
  players: Player[]
  playingPlayer: {
    playerId?: string
    loading: boolean
    error?: Error
  }
}

export interface CardState {
  numberOfCardsToDeal: number,
  trumpCard?: Card
  tableCards: Card[]
  playingPlayerCards: Card[]
}

export interface GameState {
  loading: boolean
  error?: Error
  newGame: {
    gameId?: string
    loading: boolean
    error?: Error
  }
}
