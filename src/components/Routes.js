import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loadable from "react-loadable";

const Loading = () => <div>...carregando</div>;

const mainRoutes = [
  {
    name: "",
    path: "/",
    exact: true,
    helmet: false,
    component: Loadable({
      loader: () => import("./Main"),
      loading: Loading
    })
  }
];

const HelmetWrapper = ({ name, path, exact, component }) => (
  <Fragment>
    <Helmet>
      <title>{name}</title>
    </Helmet>
    <Route path={path} exact={exact} component={component} />
  </Fragment>
);

const Main = () => (
  <Fragment>
    <Switch>
      {mainRoutes.map((r, i) => (
        <Fragment key={i}>
          {r.helmet ? (
            <HelmetWrapper
              name={r.name}
              path={r.path}
              exact={r.exact}
              component={r.component}
            />
          ) : (
            <Route path={r.path} exact={r.exact} component={r.component} />
          )}
        </Fragment>
      ))}
    </Switch>
  </Fragment>
);

export default Main;
