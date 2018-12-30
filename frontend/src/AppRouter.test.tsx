import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import {createStore} from 'redux';
import rootReducer from './store';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
