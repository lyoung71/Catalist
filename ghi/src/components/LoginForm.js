import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const { login } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputs.username, inputs.password);
    navigate("/");
  };
  return (
    <form className="form-container">
      <label className="form-label">
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label className="form-label">
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 rounded px-2 py-2"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
