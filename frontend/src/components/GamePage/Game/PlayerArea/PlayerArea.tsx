import React from 'react';
import Player from '../../../../models/Player';
import {FaceDownCardSet} from '../CardSet/CardSet';
import './PlayerArea.scss';

interface Props {
  position: number
  player?: Player
}

const POSITIONS = ['bottom', 'top', 'left', 'right'];
const PlayerArea = (props: Props) => {

  const areaWithPlayer = (player: Player) => {
    return (
      <React.Fragment>
        <div className='player-info'>{player.name}</div>
        <FaceDownCardSet numberOfCards={player.numberOfCards}/>
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

