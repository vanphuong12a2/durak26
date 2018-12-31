import React from 'react';
import NewGameButtonContainer from '../../containers/NewGameButtonContainer';

import './IndexPage.scss';

const IndexPage = () => {
  return (
    <React.Fragment>
      <header>
        <h3>Durak 26</h3>
      </header>
      <NewGameButtonContainer />
    </React.Fragment>
  );
};

export default IndexPage;
