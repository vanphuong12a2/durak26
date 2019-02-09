import React from 'react';
import './PlayerArea.scss';
import PlayerData from '../../../../models/PlayerData';
import {CardData} from '../../../../models/CardsMap';
import {PlayerPosition} from '../../../../common/PlayerPosition';
import CardSet from '../CardSet/CardSet';

interface Props {
  position: PlayerPosition
  player?: PlayerData
}

const PlayerArea = (props: Props) => {

  const areaWithPlayer = (player: PlayerData, cards: CardData[]) => {
    return (
      <React.Fragment>
        <div className='player-info'>{player.name}-{player.id.charAt(player.id.length-1)}</div>
        <CardSet cards={cards}/>
      </React.Fragment>
    )
  };

  const areaWithoutPlayer = <React.Fragment/>;

  return (
    <div className={`player-area ${PlayerPosition[props.position].toLowerCase()}`}>
      {props.player ? areaWithPlayer(props.player, props.player.cards) : areaWithoutPlayer}
    </div>
  );
};

export default PlayerArea;
