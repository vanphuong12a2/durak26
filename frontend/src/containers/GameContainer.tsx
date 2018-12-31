import React from 'react';
import Game from '../components/GamePage/Game/Game';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import {loadGame} from '../store/game/gameActionCreator';

const mapStateToProps = (state: ApplicationState, ownProps: { gameId: string }) => ({
  gameId: ownProps.gameId,
  loading: state.game.loading,
  error: state.game.error,
  numberOfCardsToDeal: state.card.numberOfCardsToDeal,
  trumpCard: state.card.trumpCard,
  tableCards: state.card.tableCards,
  playingPlayerCards: state.card.playingPlayerCards,
  players: state.player.players,
  playingPlayerId: state.player.playingPlayerId
});

const mapDispatchToProps = (dispatch: any) => ({
  loadGameFunction: (gameId: string) => dispatch(loadGame(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
