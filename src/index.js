import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter /AppRouter";
import createStore from "./store";
const store = createStore();
import "regenerator-runtime/runtime.js";
import gulp from './gulpfile';

console.log("hello");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
