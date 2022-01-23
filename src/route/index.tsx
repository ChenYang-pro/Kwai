import React from "react";
import { Routes, Route } from "react-router-dom";
import routeList from "./route_list";

function IndexRoute() {
  const routes = (
    <Routes>
      {routeList.map((item, _idx) => {
        return <Route path={item.path} element={item.element} />;
      })}
    </Routes>
  );
  console.log("routes", routes);
  return <div>{routes}</div>;
}

export default IndexRoute;
