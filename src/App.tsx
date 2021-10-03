import React from "react";
import { FC } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes, { renderRoutes } from "routes";

const App: FC = () => {
  const history = createBrowserHistory();

  return <Router history={history}>{renderRoutes(routes)}</Router>;
};

export default App;
