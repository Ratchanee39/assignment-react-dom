import AllNew from "@components/new/AllNew";
import DetailNew from "@components/new/DetailNew";
import HomePage from "@components/new/HomePage";
import LayoutPage from "@components/new/LayoutPage";
import MainPage from "@components/new/MainPage";
import NotFound from "@components/new/NotFound";
import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/ogs-new",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "news/:id",
        element: <AllNew />,
      },
      {
        path: "detail-news/:type/:id",
        element: <DetailNew />,
      },
    ],
  },
]);
export default routers;
