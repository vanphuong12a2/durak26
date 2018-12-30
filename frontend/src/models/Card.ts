class Card {
  public value: string;
  public suite: string;

  constructor(value: string, suite: string) {
    this.value = value;
    this.suite = suite;
  }

  public getSvg = () => `_${this.value}${this.suite}`;
}

export default Card;
