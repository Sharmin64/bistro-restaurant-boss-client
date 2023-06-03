import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import MenuBar from "./../Pages/MenuBar/MenuBar/MenuBar";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../LayOut/Main/DashBoard/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./PrivateRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import Payment from "../Pages/DashBoard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuBar />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },

      //?admin routes
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);
