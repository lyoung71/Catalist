import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const { register } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    await register(userData, "http://localhost:8000/accounts/api/accounts");
    navigate("/info");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name: </label>
      <input
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <label htmlFor="lastName">Last Name: </label>
      <input
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <label htmlFor="username">Username: </label>
      <input
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="password">Password: </label>
      <input
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
