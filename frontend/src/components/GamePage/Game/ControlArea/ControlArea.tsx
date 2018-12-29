import React from 'react';
import './ControlArea.scss';

const ControlArea = () => {
  const dummyHandler = () => {;};
  return (
      <div className='control-area'>
        <a className='waves-effect waves-light btn-small' onClick={dummyHandler}>New game</a>
        <a className='waves-effect waves-light red lighten-2 btn-small' onClick={dummyHandler}>Exit</a>
      </div>
  );
};

export default ControlArea;
