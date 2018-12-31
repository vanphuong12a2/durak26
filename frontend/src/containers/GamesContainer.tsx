import React from 'react';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import Games from '../components/IndexPage/Games/Games';
import {addGame} from '../store/game/actions';

const mapStateToProps = (state: ApplicationState) => (
  {...state.game.newGame}
);

const mapDispatchToProps = (dispatch: any) => (
  {
    newGameButtonOnClick: () => dispatch(addGame())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Games);
