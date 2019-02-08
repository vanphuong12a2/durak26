import React from 'react';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import ControlArea from '../components/GamePage/Game/ControlArea/ControlArea';
import {removePlayer} from '../store/player/playerActionCreator';
import {withRouter} from 'react-router';

const mapStateToProps = (state: ApplicationState) => ({
  playing: state.game.playing
});

const mapDispatchToProps = (dispatch: any) => ({
  exitGameFunction: () => dispatch(removePlayer())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ControlArea));