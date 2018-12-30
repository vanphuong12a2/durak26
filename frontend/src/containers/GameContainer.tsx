import React from 'react';
import Game, {GameProps} from '../components/GamePage/Game/Game';
import {connect} from 'react-redux';
import {ApplicationState} from '../reducers/ApplicationState';


const mapStateToProps: (state: ApplicationState) => GameProps =
  (state: ApplicationState) => ({
    numberOfCardsToDeal: state.card.numberOfCardsToDeal,
    trumpCard: state.card.trumpCard,
    tableCards: state.card.tableCards,
    players: state.player.players
  });

export default connect(mapStateToProps, null)(Game);
