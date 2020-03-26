import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './components/App/App';

import './index.css';
import reducer from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <AppRouter /> */}
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
