import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from '../components/Header/Header';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Login from '../Pages/Login/Login';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ]
  },
  {

  }
]);

export default router;