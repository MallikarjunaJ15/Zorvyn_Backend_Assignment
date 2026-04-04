import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Sidebar from "./component/Sidebar";

const routes = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/side", element: <Sidebar /> },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
