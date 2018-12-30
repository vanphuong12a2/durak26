import React from 'react';
import Game from '../components/GamePage/Game/Game';
import {connect} from 'react-redux';
import {ApplicationState} from '../reducers/ApplicationState';


const mapStateToProps = (state: ApplicationState) => ({
  numberOfCardsToDeal: state.card.numberOfCardsToDeal,
  trumpCard: state.card.trumpCard,
  players: state.player.players
});

export default connect(mapStateToProps, null)(Game);
