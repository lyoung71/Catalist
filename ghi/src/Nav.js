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

    if (token) {
        return (
            <>
            <nav>
                <div>
                <ul>
                    <li>
                        <button onClick={handleLogout}>Log Out</button>
                    </li>
                </ul>
                </div>
            </nav>
            </>
        );
    }
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
                </ul>
            </div>
            </nav>
        </>
    );

}

export default Nav;
