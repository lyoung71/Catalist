import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const { register } = useToken();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            disabled: false
        }

        await register(userData, "http://localhost:3000/user/create")
        navigate("/info")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input name="username" onChange={(e) => setUsername(e.target.value)}></input>
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <label htmlFor="firstName">First Name: </label>
            <input name="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
            <label htmlFor="lastName">Last Name: </label>
            <input name="lastName" onChange={(e) => setLastName(e.target.value)}></input>
            <label htmlFor="email">Email: </label>
            <input name="email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <button type="submit">Signup</button>
        </form>
    )
}

export default SignupForm;
