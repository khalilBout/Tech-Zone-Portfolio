import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Root from "./pages/Root";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ReactGA from "react-ga";

// const TRAFIC_ID = "G-1H2ZSZZ9EG";
// ReactGA.initialize(TRAFIC_ID);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <Index /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
