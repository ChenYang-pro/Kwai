import Index from "../view/index/index";
import LikeLiHood from "../view/likelihood/index";
import Commodity from "../view/commodity/index";

let routeList = [
  {
    Index: true,
    path: "/",
    element: <Index />,
  },
  {
    path: "likelihood",
    element: <LikeLiHood />,
  },
  {
    path: "commodity",
    element: <Commodity />,
  },
];

export default routeList;
