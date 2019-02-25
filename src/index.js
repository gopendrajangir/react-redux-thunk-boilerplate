/* eslint-disable linebreak-style */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './app';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const wrapper = document.getElementById("container");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , wrapper
);