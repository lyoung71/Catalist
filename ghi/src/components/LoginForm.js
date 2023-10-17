import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value}))
    }
    const { login } = useToken();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(inputs.username, inputs.password)
        // navigate("/")
    }
    return (
        <form>
            <label>Username:
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
            </label>
            <button type="button" onClick={handleSubmit}>Login</button>
        </form>
    )
}

export default LoginForm;
