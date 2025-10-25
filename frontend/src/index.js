import React from "react";
import ReactDOM from "react-dom/client";
import router from "./route";
import { RouterProvider } from "react-router/dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
