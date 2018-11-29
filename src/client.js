import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";

import configureStore from "./redux";
import App from "./App";

const root = document.getElementById("root");

const store = configureStore(window.__PRELOADED_STATE__);

window.main = () => {
  render(App);
};

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default;
    render(NewApp);
  });
}

function render(Root) {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </Provider>,
      root
    );
  });
}
