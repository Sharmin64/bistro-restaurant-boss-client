import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import MenuBar from "./../Pages/MenuBar/MenuBar/MenuBar";

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
    ],
  },
]);
