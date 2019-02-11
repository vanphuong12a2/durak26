import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import {Provider} from 'react-redux';
import {testStore} from './common/TestData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={testStore}><AppRouter /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
