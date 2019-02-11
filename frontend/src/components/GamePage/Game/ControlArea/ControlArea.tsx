import React from 'react';
import './ControlArea.scss';
import {RouteComponentProps} from 'react-router';

interface Props {
  playing: boolean
  exitGameFunction: () => void
  serveGameFunction: () => void
}

const ControlArea = (props: Props & RouteComponentProps) => {

  const exitGameHandler = () => {
    props.exitGameFunction();
    props.history.push('/');
  };

  return (
    <div className='control-area'>
      <a id='start-game-btn'
         className='waves-effect waves-light btn-small'
         onClick={props.serveGameFunction}>
        Start game
      </a>
      <a id='exit-game-btn'
         className='waves-effect waves-light red lighten-2 btn-small'
         onClick={exitGameHandler}>
        Exit
      </a>
    </div>
  );
};

export default ControlArea;
