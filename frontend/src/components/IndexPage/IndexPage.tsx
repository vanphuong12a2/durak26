import React from 'react';
import './IndexPage.css';
import {Link} from 'react-router-dom';

const IndexPage = () => {
  return (
    <React.Fragment>
      <header>
        <h3>Durak 26</h3>
      </header>
      <div className='newGameButton'>
        <Link className='waves-effect waves-light btn-small' to='/game/1'>New game</Link>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
