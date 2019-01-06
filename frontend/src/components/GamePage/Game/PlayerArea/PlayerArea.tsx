import React from 'react';
import './PlayerArea.scss';
import CardData from '../../../../models/CardData';
import PlayerData, {PlayerPosition} from '../../../../models/PlayerData';
import CardSet from '../CardSet/CardSet';

interface Props {
  position: PlayerPosition
  player?: PlayerData
  playerCards: CardData[]
}

const PlayerArea = (props: Props) => {

  const areaWithPlayer = (player: PlayerData, cards: CardData[]) => {
    return (
      <React.Fragment>
        <div className='player-info'>{player.name}</div>
        <CardSet cards={cards}/>
      </React.Fragment>
    )
  };

  const areaWithoutPlayer = <React.Fragment/>;

  return (
    <div className={`player-area ${PlayerPosition[props.position].toLowerCase()}`}>
      {props.player ? areaWithPlayer(props.player, props.playerCards) : areaWithoutPlayer}
    </div>
  );
};

export default PlayerArea;
