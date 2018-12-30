import React from 'react';
import Player from '../../../../models/Player';
import Card from '../../../../models/Card';
import './PlayerArea.scss';
import {FaceDownCardSet, FaceUpCardSet} from '../CardSet/CardSet';

interface Props {
  position: number
  player?: Player
  playingPlayerCards: Card[]
  playingPlayerId?: number
}

const POSITIONS = ['bottom', 'top', 'left', 'right'];
const PlayerArea = (props: Props) => {

  const areaWithPlayer = (player: Player) => {
    return (
      <React.Fragment>
        <div className='player-info'>{player.name}</div>
        {
          props.playingPlayerId === player.id ?
            <FaceUpCardSet cards={props.playingPlayerCards}/> :
            <FaceDownCardSet numberOfCards={player.numberOfCards}/>
        }
      </React.Fragment>
    )
  };

  const areaWithoutPlayer = <React.Fragment/>;

  return (
    <div className={`player-area ${POSITIONS[props.position]}`}>
      {props.player ? areaWithPlayer(props.player) : areaWithoutPlayer}
    </div>
  );
};

export default PlayerArea;

