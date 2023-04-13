import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Nft } from '../pages';

const routePublic = (path: string, component: React.FC) => ({
  path,
  component,
  isAuth: true,
});

const routes = {
  Home: routePublic('/', Home),
  Nft: routePublic('/nft/:dappId/:nftId', Nft),
};

const PrivateRoute = ({ children }: any) => {
  // TODO : AUTH CHECK AND REDIRECT
  // return <Navigate to={redirectTo} />;
  return children;
};

const route = () => (
  <Routes>
    {Object.values(routes).map((x, i) => {
      if (x.isAuth) {
        return (
          <Route
            key={i}
            path={x.path}
            element={
              <PrivateRoute>
                <x.component />
              </PrivateRoute>
            }
          />
        );
      } else {
        return <Route key={i} path={x.path} element={<x.component />} />;
      }
    })}
  </Routes>
);

export default route;
