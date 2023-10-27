import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const { register } = useToken();
    const navigate = useNavigate();

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
        navigate("/user");
    }

    return (
        <div className="flex justify-center items-center h-screen bg-PokeYellow">
            <form className="bg-PokeBlue text-center p-6 rounded-lg PokemonDigital mb-10" onSubmit={handleSubmit}>
                <label className="text-PokeYellow" htmlFor="username">Username</label>
                <input className="block rounded-lg text-PokeBlue p-2 border shadow-xl" name="username" onChange={(e) => setUsername(e.target.value)} />
                <label className="text-PokeYellow" htmlFor="password">Password</label>
                <input className="block rounded-lg text-PokeBlue p-2 border shadow-xl" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <label className="text-PokeYellow" htmlFor="firstName">First Name</label>
                <input className="block rounded-lg text-PokeBlue p-2 border shadow-xl" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                <label className="text-PokeYellow" htmlFor="lastName">Last Name</label>
                <input className="block rounded-lg text-PokeBlue p-2 border shadow-xl" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                <button
                    type="submit"
                    className="bg-White text-PokeBlue hover:bg-opacity-80 border rounded-lg mt-4 px-4 py-2 shadow-xl"
                >
                    Create User
                </button>
            </form>
        </div>
    );
}

export default SignupForm;
