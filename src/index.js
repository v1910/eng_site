import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import engine from './createRedux';

ReactDOM.render(
  <Provider store={engine}>
    <App />
  </Provider>,
  document.getElementById('root')
);
