import React from 'react';

export interface GamesProps {
  playing: boolean
}

const Games = (props: GamesProps) => {
  const dummyHandler = () => {;};
  return (
    <div className='new-game'>
      <a className='waves-effect waves-light btn-small' onClick={dummyHandler}>New game</a>
    </div>
  );
};

export default Games;
