import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import AppRouter from './AppRouter';
import {applyMiddleware, createStore, Middleware} from 'redux';
import rootReducer from './store/index';
import {Provider} from 'react-redux';

let middleware: Middleware[] = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();
  middleware = [...middleware, loggerMiddleware];
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
