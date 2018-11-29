import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import Main from "./components/Routes";

const App = () => (
  <Fragment>
    <Helmet defaultTitle="Test" titleTemplate="%s | Test">
      <html lang="pt-BR" />
    </Helmet>
    <Main />
  </Fragment>
);

export default App;
