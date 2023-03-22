import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../errors/ErrorPage";
import CardsPage from "../pages/CardsPage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <CardsPage />,
  },
  {
    path: "/search",
    element: <CardsPage />,
  },
  {
    path: "/song/:songId",
    element: <DetailPage />,
  },
  {
    path: "/playlist/:songId",
    element: <DetailPage />,
  },
]);

export default router;
