import React from 'react';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import {withRouter} from 'react-router';
import NewGameButton from '../components/IndexPage/NewGameButton/NewGameButton';
import {addGame} from '../store/game/gameActionCreator';

const mapStateToProps = (state: ApplicationState) => (
  {...state.game.newGame}
);

const mapDispatchToProps = (dispatch: any) => (
  {
    newGameButtonOnClick: () => dispatch(addGame())
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGameButton));
