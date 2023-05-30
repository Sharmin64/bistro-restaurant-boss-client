import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-amber-200">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">
          {/*Sidebar content here  */}
          <li>
            <NavLink to="/dashboard/home">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt />
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart /> MyCart
              <span className="badge badge-secondary inline">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <div className="divider bg-yellow-300"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHamburger /> Our MenuBar
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
