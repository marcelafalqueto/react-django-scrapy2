import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/Search";
import SearchDetails from "./routes/SearchDetails";
import LoginPage from "./routes/LoginPage";
import Register from "./routes/Register";
import ErrorPage from "./routes/ErrorPage";
import Profile from "./routes/Profile";
import Notifications from "./routes/Notifications";
import Crawler from './routes/Crawler';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "search",
        element: <Search />,
      },
      {
        path: "crawler",
        element: <Crawler />,
      },
      {
        path: "searchdetails",
        element: <SearchDetails />,
      },
      
      {
        path: "loginpage",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
