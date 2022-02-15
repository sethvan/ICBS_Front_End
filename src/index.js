import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer.js";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";

const middleware = [reduxPromise, reduxThunk];
const theStore = applyMiddleware(...middleware)(createStore)(rootReducer);

// Provider is the glue between react and redux. Give it the store!
ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
