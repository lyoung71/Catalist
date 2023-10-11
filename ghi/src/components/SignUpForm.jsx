import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [ email, setEmail ] = useState();
    const [ fullName, setfullName ] = useState();
    const { register } = useToken();
    const navigate = useNavigate;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        username: username,
        password: password,
        email: email,
        fullName: fullName,
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input name="username" onChange={(e) => setUsername(e.target.value)}></input>
            <label htmlFor="password">Password: </label>
            <input name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <label htmlFor="email">Email: </label>
            <input name="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label htmlFor="fullName">Full Name: </label>
            <input name="fullName" onChange={(e) => setfullName(e.target.value)}></input>
            <button type="submit">Signup</button>
        </form>
    )
}