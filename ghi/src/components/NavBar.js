import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
