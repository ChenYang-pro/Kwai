import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routeList from './route_list';

function IndexRoute() {
  const routes = (
    <Routes>
      {routeList.map((item) => {
        return <Route path={item.path} element={item.element} key={item.name} />;
      })}
    </Routes>
  );
  return <div>{routes}</div>;
}

export default IndexRoute;
