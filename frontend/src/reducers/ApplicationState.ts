import Player from '../models/Player';
import Card from '../models/Card';

export interface ApplicationState {
  card: CardState
  player: PlayerState
}

export interface PlayerState {
  players: Player[]
}

export interface CardState {
  numberOfCardsToDeal: number,
  trumpCard: Card
  tableCards: Card[]
}
