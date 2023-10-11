import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { login } = useToken();
    const navigate = useNavigate;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        navigate("/info")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input name="username" onChange={(e) => setUsername(e.target.value)}></input>
            <label htmlFor="password">Password: </label>
            <input name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Login</button>
        </form>
    )
}