import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

import * as Config from "../constants/Config";

const Routes = () => {
  return (
    <Switch>
      {/* Redirect root path "/" to "/react-movie-app" */}
      <Route exact path="/" render={() => <Redirect to={`/${Config.HOME_PAGE}`} />} />

      <Route
        path={`/${Config.HOME_PAGE}/:category/search/:keyword`}
        component={Catalog}
      />
      <Route path={`/${Config.HOME_PAGE}/:category/:id`} component={Detail} />
      <Route path={`/${Config.HOME_PAGE}/:category`} component={Catalog} />
      <Route path={`/${Config.HOME_PAGE}`} exact component={Home} />
    </Switch>
  );
};

export default Routes;
