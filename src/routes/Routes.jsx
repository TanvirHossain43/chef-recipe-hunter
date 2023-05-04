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
import ViewRecipe from '../components/ViewRecipe/ViewRecipe';
import Register from '../Pages/Register/Register';
import ChefDetails from '../Pages/ChefDetails/ChefDetails';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Error from '../Pages/Error/Error';
import Recipe from '../components/Recipe/Recipe';




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
      },
      // {
      //   path: "recipes",
      //   element: <ViewRecipe></ViewRecipe>
      // },
      // {
      //   path: 'chef:id',
      //   element: <ViewRecipe></ViewRecipe>,

      // },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'chef',
    element: <PrivateRoutes><Main></Main></PrivateRoutes>,
    children: [
      {
        path: ':id',
        element: <ViewRecipe></ViewRecipe>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefdata/${params.id}`)
      },

    ]
  },
  {
    path: 'chef',
    element: <ViewRecipe></ViewRecipe>,
    children: [
      {
        path: ':id',
        element: <Recipe></Recipe>,
        loader: ({ params }) => fetch(`http://localhost:5173/chef/${params.id}`)
      }
    ]

  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;