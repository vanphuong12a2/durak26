import React from 'react';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import {addGame} from '../store/game/actions';
import {withRouter} from 'react-router';
import Games from '../components/IndexPage/Games/Games';

const mapStateToProps = (state: ApplicationState) => (
  {...state.game.newGame}
);

const mapDispatchToProps = (dispatch: any) => (
  {
    newGameButtonOnClick: () => dispatch(addGame())
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Games));
