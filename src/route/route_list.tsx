import Index from "../view/index/index";
import Login from "../view/login/index";
import Commodity from "../view/commodity/index";

let routeList = [
  {
    Index: true,
    path: "/",
    element: <Index />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "commodity",
    element: <Commodity />,
  },
];

export default routeList;
