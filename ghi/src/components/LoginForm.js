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
        login(inputs.username, inputs.password)
        navigate("/user")
    }
    return (
        <div className="flex justify-center items-center h-screen bg-PokeBlue">
            <form className="bg-PokeYellow text-center p-6 rounded-lg PokemonDigital mb-10">
                <label className="text-PokeBlue">Username</label>
                <input className="block rounded-lg text-PokeBlue p-2 border shadow-xl" type="text" name="username" onChange={handleChange} />
                <label className="text-PokeBlue">Password</label>
                <input className="block rounded-lg text-PokeBlue p-2 border shadow-xl" type="password" name="password" onChange={handleChange} />
                <button className="bg-White text-PokeBlue hover:bg-opacity-80 border rounded-lg mt-4 px-4 py-2 shadow-xl" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
