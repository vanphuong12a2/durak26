import React from 'react';
import GamesContainer from '../../containers/GamesContainer';
import './IndexPage.scss';

const IndexPage = () => {
  return (
    <React.Fragment>
      <header>
        <h3>Durak 26</h3>
      </header>
      <GamesContainer />
    </React.Fragment>
  );
};

export default IndexPage;
