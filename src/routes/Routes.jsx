import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PropertyCardDetails from "../pages/Home/PropertyCardDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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