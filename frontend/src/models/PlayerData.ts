export enum PlayerPosition {
  BOTTOM = 'BOTTOM',
  TOP = 'TOP',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

class PlayerData {
  public id: string;
  public name: string;
  public position: PlayerPosition;

  constructor(id: string, name: string, position: PlayerPosition) {
    this.id = id;
    this.name = name;
    this.position = position;
  }
}

export default PlayerData;
