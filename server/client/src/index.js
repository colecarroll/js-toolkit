import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  //provider component reads changes from redux store, anytime store state changes, provider will notify any of its child components that some new state is available and all those components will update with the new state
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
