import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import './NewGameButton.scss';

export interface GamesProps {
  gameId?: string
  loading: boolean
  error?: Error
  newGameButtonOnClick: () => any
  getCurrentGame: () => any
}

class NewGameButton extends React.Component<GamesProps & RouteComponentProps> {

  public componentDidMount() {
    this.props.getCurrentGame();
  }

  public render = () => {

    if (this.props.error) {
      return (<div className='error'>There is an error!</div>)
    }

    if (this.props.loading) {
      return (<div className='loading'>Loading...</div>)
    }

    if (this.props.gameId) {
      this.props.history.push(`/play/${this.props.gameId}`);
      return (<React.Fragment/>);
    } else {
      return (
        <div className='new-game'>
          <a id='new-game-btn' className='waves-effect waves-light btn-small' onClick={this.props.newGameButtonOnClick}>New
            game</a>
        </div>
      );
    }
  }
}

export default NewGameButton;
