// this is the root reducer! It is the store manager for all the reducers
// to make a rootreducer:
// 1. Get a method from redux, called combineReducers
import { combineReducers } from "redux";
// 2. get each individual reducer
import homeReducer from "./homeReducer";
import navBarReducer from "./navBarReducer";
import footerReducer from "./footerReducer";

// 3. call combinereducers and hand it an object
// each key in combineReducers will be a piece of state in the redux store
// each value, will be the value of that piece of state in the redux store
const rootReducer = combineReducers({
  home: homeReducer,
  navBar: navBarReducer,
  footer: footerReducer,
});

export default rootReducer;
