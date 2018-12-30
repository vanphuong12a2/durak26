class Player {
  public id: number;
  public name: string;
  public numberOfCards: number;


  constructor(id: number, name: string, numberOfCards: number) {
    this.id = id;
    this.name = name;
    this.numberOfCards = numberOfCards;
  }
}

export default Player;
