import PlayerData from './PlayerData';
import {CardsMap} from './CardsMap';

class GameData {
  public players: PlayerData[];
  public cards: CardsMap;

  constructor(players: PlayerData[], cards: CardsMap) {
    this.players = players;
    this.cards = cards;
  }
}

export default GameData;
