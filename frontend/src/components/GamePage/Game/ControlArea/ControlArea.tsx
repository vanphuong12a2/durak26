import React from 'react';
import './ControlArea.scss';

interface Props {
  playing: boolean
  exitGameFunction: () => void
}

const ControlArea = (props: Props) => {
  const dummyHandler = () => {;};
  return (
      <div className='control-area'>
        <a className='waves-effect waves-light btn-small' onClick={dummyHandler}>Start game</a>
        <a className='waves-effect waves-light red lighten-2 btn-small' onClick={props.exitGameFunction}>Exit</a>
      </div>
  );
};

export default ControlArea;
