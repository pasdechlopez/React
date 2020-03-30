import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import searchReducer from './reducers/search';
import authReducer from './reducers/auth';

import rootSaga from './sagas/';
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  authReducer,
  searchReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <AppRouter /> */}
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
