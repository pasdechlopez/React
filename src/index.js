import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/search';
import mySaga from './sagas/mySaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <AppRouter /> */}
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
