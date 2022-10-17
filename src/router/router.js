import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutesList } from "./global-routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutesList.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
