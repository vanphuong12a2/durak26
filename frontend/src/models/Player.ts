export enum Position {
  NONE,
  ATTACKING,
  DEFENDING
}

class Player {
  public id: number;
  public name: string;
  public numberOfCards: number;
  public inTurn: boolean = false;
  public position: Position = Position.NONE;

  constructor(id: number, name: string, numberOfCards: number) {
    this.id = id;
    this.name = name;
    this.numberOfCards = numberOfCards;
  }
}

export default Player;
