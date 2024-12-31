import React from "react";
import { Link, NavLink } from "react-router-dom";
import dark from "../dark-mode.svg";
import { useSelector } from "react-redux";

function Header() {
  const total = useSelector((state) =>
    state.cart.items.reduce((state, item) => state + item.quantity, 0)
  );
  return (
    <header className="flex py-[10px] justify-center gap-32 items-center bg-sky-50">
      <div className="mr-52">
        <a
          href="#"
          className="bg-blue-500 text-white py-1 px-4 hover:bg-blue-600 ease duration-150 rounded-lg text-3xl flex items-center justify-center bg-"
        >
          C
        </a>
      </div>
      <div className="flex justify-center items-center gap-[360px]">
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink className="capitalize" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink className="capitalize" to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-6 navbar-end">
          <img src={dark} alt="" />
          <Link to='/cart' className="text-3xl text-blue-700 font-medium">{total}</Link>
        </div>
      </div>
    </header>
  );
  4;
}

export default Header;
