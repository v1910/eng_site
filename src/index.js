//index.js

import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainReducer from './MainReducer';

let store = createStore(MainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)