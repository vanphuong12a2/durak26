import React from 'react';
import Game from '../components/GamePage/Game/Game';
import {connect} from 'react-redux';
import {ApplicationState} from '../store/ApplicationState';
import {loadGame} from '../store/game/gameActionCreator';
import {addPlayer} from '../store/player/playerActionCreator';

const mapStateToProps = (state: ApplicationState, ownProps: { gameId: string }) => ({
  gameId: ownProps.gameId,
  loading: state.game.loading,
  error: state.game.error,
  newPlayer: state.player.newPlayer,
  players: state.player.players,
  cards: state.card.cards,
});

const mapDispatchToProps = (dispatch: any) => ({
  loadGameFunction: (gameId: string) => dispatch(loadGame(gameId)),
  joinGameFunction: (gameId: string) => dispatch(addPlayer(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
