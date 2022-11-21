import Cost from "../pages/Cost";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Cost></Cost>,
  },
]);
