import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink to="/login" activeStyle>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeStyle>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/journals" activeStyle>
                Journals
              </NavLink>
            </li>
            <li>
              <NavLink to="/todos" activeStyle>
                Todos
              </NavLink>
            </li>
            <li>
              <NavLink to="/userinfo" activeStyle>
                My Account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
