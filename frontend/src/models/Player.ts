class Player {
  public id: string;
  public name: string;
  public numberOfCards: number;

  constructor(id: string, name: string, numberOfCards: number) {
    this.id = id;
    this.name = name;
    this.numberOfCards = numberOfCards;
  }
}

export default Player;
