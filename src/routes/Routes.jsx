import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Properties from "../pages/Properties/Properties";
import Contact from "../pages/Contact/Contact";
import PropertyCardDetails from "../pages/Home/PropertyCardDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/property_data.json')
      },
      {
        path: '/propertyCardDetails/:id',
        element: <PrivateRoute><PropertyCardDetails></PropertyCardDetails></PrivateRoute>,
        loader: ()=> fetch('/property_data.json')
      },
      {
        path: '/properties',
        element: <PrivateRoute><Properties></Properties></PrivateRoute>,
        loader: ()=> fetch('/property_data.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
    },
  ]);