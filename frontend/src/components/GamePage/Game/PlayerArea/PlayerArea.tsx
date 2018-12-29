import React from 'react';

interface Props {
  position: string
}

const PlayerArea = (props: Props) => {
  return (
    <div className={`player-area ${props.position}`}>
      Player {props.position}
    </div>
  );
};

export default PlayerArea;

