import RouteDefinitions from "./route-definitions";
import Home from "../pages/home/home";
import Create from "../pages/create-challange/create-challange";

export const PublicRoutesList = [
  {
    path: RouteDefinitions.ROUTE_HOME,
    element: <Home />,
  },
  {
    path: RouteDefinitions.ROUTE_CREATE,
    element: <Create />,
  },
  
];
