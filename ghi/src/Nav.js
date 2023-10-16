import React from "react";
import { Link } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

function Nav() {
  const { token, logout } = useToken();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout Unsuccessful:", error);
    }
  };

  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/login">
                <button>Log In</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button>Get Started</button>
              </Link>
            </li>
            {token ? (
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
