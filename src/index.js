import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import AppRouter from './components/AppRouter/AppRouter';
import createStore from './store';
const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
