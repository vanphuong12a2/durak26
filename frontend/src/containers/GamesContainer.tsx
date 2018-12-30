import React from 'react';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import Games, {GamesProps} from '../components/IndexPage/Games/Games';

const mapStateToProps: (state: ApplicationState) => GamesProps =
  (state: ApplicationState) => ({
    playing: state.game.playing
  });

export default connect(mapStateToProps, null)(Games);
