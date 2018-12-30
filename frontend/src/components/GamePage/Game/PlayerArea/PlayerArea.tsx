import React from 'react';
import Player from '../../../../models/Player';
import {FaceDownCardSet} from '../CardSet/CardSet';
import './PlayerArea.scss';

interface Props {
  position: number
  player?: Player
}

const POSITIONS = ['bottom', 'top', 'left', 'right']
const PlayerArea = (props: Props) => {
  return (
    <div className={`player-area ${POSITIONS[props.position]}`}>
      {props.player ? <FaceDownCardSet numberOfCards={props.player.numberOfCards}/> : <React.Fragment/>}
    </div>
  );
};

export default PlayerArea;

