import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import MenuBar from "./../Pages/MenuBar/MenuBar/MenuBar";
import Order from "../Pages/Order/Order/Order";

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
        path: "order",
        element: <Order />,
      },
    ],
  },
]);
