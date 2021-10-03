import React, { Suspense, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingScreen from "components/LoadingScreen";

type Routes = {
  exact?: boolean;
  path?: string | string[];
  component?: any;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Component {...props} />}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("views/MainView")),
  },
  {
    exact: true,
    path: "/login",
    component: lazy(() => import("views/LoginView")),
  },
  {
    exact: true,
    path: "/register",
    component: lazy(() => import("views/RegisterView")),
  },
  {
    exact: true,
    path: "/info",
    component: lazy(() => import("views/InformationView")),
  },
  {
    exact: true,
    path: "/board",
    component: lazy(() => import("views/board/BoardView")),
  },
  {
    exact: true,
    path: "/board/:id",
    component: lazy(() => import("views/board/BoardDetail")),
  },
  {
    exact: true,
    path: "/board-register",
    component: lazy(() => import("views/board/BoardRegister")),
  },
];

export default routes;
