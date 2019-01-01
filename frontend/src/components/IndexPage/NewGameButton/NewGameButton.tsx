import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import './NewGameButton.scss';

export interface GamesProps {
  gameId?: string
  loading: boolean
  error?: Error
  newGameButtonOnClick: () => any
}

const NewGameButton = (props: GamesProps & RouteComponentProps) => {

  if (props.error) {
    return (<div className='error'>There is an error!</div>)
  }

  if (props.loading) {
    return (<div className='loading'>Loading...</div>)
  }

  if (props.gameId) {
    props.history.push(`/play/${props.gameId}`);
  }

  return (
    <div className='new-game'>
      <a className='waves-effect waves-light btn-small' onClick={props.newGameButtonOnClick}>New game</a>
    </div>
  );
};

export default NewGameButton;
