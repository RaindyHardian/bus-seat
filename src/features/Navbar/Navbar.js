import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src="/bus.svg" className="navbar__icon" alt="logo" />
        Bus<span className="navbar__orange">Seat</span>
      </NavLink>
    </div>
  );
};

export default Navbar;
