import React from 'react';
import {Link} from 'react-router-dom';
import './IndexPage.scss';

const IndexPage = () => {
  return (
    <React.Fragment>
      <header>
        <h3>Durak 26</h3>
      </header>
      <div className='new-game'>
        <Link className='waves-effect waves-light btn-small' to='/game/1'>New game</Link>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
