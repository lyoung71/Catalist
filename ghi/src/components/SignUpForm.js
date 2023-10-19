import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const { register } = useToken();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password,
    };

    register(userData, "http://localhost:8000/api/accounts");
    e.target.reset();
    // navigate("/info");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Signup</button>
    </form>
  );
}

export default SignupForm;
