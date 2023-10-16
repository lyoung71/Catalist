import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const { register } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
    };

    await register(userData, "http://localhost:8000/api/accounts");
    // navigate("/info");
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
