import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import IndexPage from './components/IndexPage/IndexPage';
import GamePage from './components/GamePage/GamePage';

const AppRouter = () => (
  <Router forceRefresh={true}>
    <div>
      <Route path='/' exact={true} component={IndexPage}/>
      <Route path='/play/:gameId' component={GamePage}/>
    </div>
  </Router>
);

export default AppRouter;
