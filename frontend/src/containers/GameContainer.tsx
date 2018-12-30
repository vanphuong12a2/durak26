import React from 'react';
import Game, {GameProps} from '../components/GamePage/Game/Game';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';

const mapStateToProps: (state: ApplicationState) => GameProps =
  (state: ApplicationState) => ({
    numberOfCardsToDeal: state.card.numberOfCardsToDeal,
    trumpCard: state.card.trumpCard,
    tableCards: state.card.tableCards,
    playingPlayerCards: state.card.playingPlayerCards,
    players: state.player.players,
    playingPlayerId: state.player.playingPlayerId
  });

export default connect(mapStateToProps, null)(Game);
