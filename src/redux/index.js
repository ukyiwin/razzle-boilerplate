import { createStore } from "redux";
import reducers from "./ducks";

const configureStore = preloadedState => {
  const store = createStore(reducers, preloadedState);

  if (module.hot) {
    module.hot.accept("./ducks", () => {
      const nextRootReducer = require("./ducks").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
