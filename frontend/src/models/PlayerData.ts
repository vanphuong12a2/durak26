import {CardData} from './CardsMap';

class PlayerData {
  public id: string;
  public name: string;
  public cards: CardData[];

  constructor(id: string, name: string, cards: CardData[]) {
    this.id = id;
    this.name = name;
    this.cards = cards;
  }
}

export default PlayerData;
