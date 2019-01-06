export const UNKNOWN_VALUE = 'X';

class CardData {
  public value: string;
  public suit: string;

  constructor(value: string, suit: string) {
    this.value = value;
    this.suit = suit;
  }
}

export default CardData;
