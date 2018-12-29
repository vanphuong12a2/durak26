import React from 'react';
import Game from '../components/GamePage/Game/Game';
import {connect} from 'react-redux';
import {Card} from '../components/GamePage/Game/CardSet/Card/Card';

interface State {
  game: {
    numberOfCardsToDeal: number,
    trumpCard: Card
  }
}

const mapStateToProps = (state: State) => ({
  numberOfCardsToDeal: state.game.numberOfCardsToDeal,
  trumpCard: state.game.trumpCard
});

export default connect(mapStateToProps, null)(Game);
