import React from 'react';
import './Games.scss';
import {Link} from 'react-router-dom';

export interface GamesProps {
  gameId?: number
  loading: boolean
  error?: Error
  newGameButtonOnClick: () => any
}

const Games = (props: GamesProps) => {

  if (props.error) {
    return (<div className='error'>There is an error!</div>)
  }

  if (props.loading) {
    return (<div className='loading'>Loading...</div>)
  }

  return (
    <div className='new-game'>
      {props.gameId ?
        <Link className='waves-effect waves-light btn-small' to={`/game/${props.gameId}`}>Go to game</Link> :
        <a className='waves-effect waves-light btn-small' onClick={props.newGameButtonOnClick}>New game</a>
      }
    </div>
  );
};

export default Games;
