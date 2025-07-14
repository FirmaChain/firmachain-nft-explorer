import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Nft, Gallery, Feeds } from '../pages';

const routePublic = (path: string, component: React.FC) => ({
  path,
  component,
  isAuth: true,
});

const routes = {
  Home: routePublic('/', Home),
  Gallery: routePublic('/gallery', Gallery),
  Feeds: routePublic('/m/gallery', Feeds),
  Nft: routePublic('/nft/:dappId/:nftId', Nft),
  Collection: routePublic('/collection/:collection', Home),
};

const PrivateRoute = ({ children }: any) => {
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
