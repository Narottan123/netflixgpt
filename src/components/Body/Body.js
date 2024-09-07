import React from "react";
import Login from "../Login/Login";
import Browse from "../Browser/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
