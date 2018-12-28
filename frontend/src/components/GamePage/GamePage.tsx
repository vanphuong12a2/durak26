import React from 'react';

interface Props {
  match: {params: {gameId: string}}
}

const GamePage = (props: Props) => {
  return (
    <div>Game page: {props.match.params.gameId}</div>
  );
};

export default GamePage;
