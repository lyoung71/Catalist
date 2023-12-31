import hero from "../content/hero.jpg"
import ft1 from "../content/ft1.png"
import ft2 from "../content/ft2.png"
import ft3 from "../content/ft3.png"
import { Link } from "react-router-dom";

function LandingPage() {
    // const [accounts, setAccounts] = useState({});
    // const { token } = useAuthContext();
    // const getData = async () => {
    //     const url = "http://localhost:8000/token/";
    //     const config = { credentials: "include" }
    //     const response = await fetch(url, config);
    //     if (response.ok) {
    //         const data = await response.json();
    //         setAccounts(data);
    //     }
    // }
    // useEffect(() => {
    //     if (token) {
    //         getData()
    //     }
    // }, [token]);

    return (
        <>
            <section className="flex justify-center items-center relative h-screen PokemonDigital font-bold">
                <img src={hero} alt="Hero Description" className="absolute w-full h-full object-cover" />
                <div className="text-center z-10 bg-White bg-opacity-70 text-PokeBlue rounded-full px-6 py-2">
                    <h1 className="text-5xl mb-4">Welcome to Catalist</h1>
                    <p className="text-xl mb-8">Your personal space to reflect, grow, and thrive.</p>
                    <Link to="signup" className="bg-PokeBlue text-White hover:bg-opacity-80 rounded-full py-2 px-6">Start Journaling</Link>
                </div>
            </section>
            <section>
                <div className="bg-PokeYellow text-PokeBlue p-10 PokemonDigital">
                    <div className="text-center text-3xl font-bold mb-16 mt-8 bg-White rounded-full shadow-lg py-6">
                        A Journey to Journal
                    </div>
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <img src={ft1} alt="..." className="rounded-full shadow-xl px-10" />
                        <div className="flex items-center justify-center">
                            <p className="text-3xl font-bold bg-White rounded-full shadow-lg py-12 px-6">Design your own comfy space</p>
                        </div>
                    </div>
                </div>
                <div className="bg-PokeYellow text-PokeBlue p-10 PokemonDigital">
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div className="flex items-center">
                            <p className="text-3xl font-bold text-center bg-White rounded-full shadow-lg py-12 px-6">A comfortable way to journal your daily life</p>
                        </div>
                        <img src={ft2} alt="Person Journaling" className="rounded-full shadow-lg px-10" />
                    </div>
                </div>
                <div className="bg-PokeYellow text-PokeBlue p-10 PokemonDigital">
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <img src={ft3} alt="..." className="rounded-full shadow-xl px-10" />
                        <div className="flex items-center justify-center text-center">
                            <p className="text-3xl font-bold bg-White rounded-full shadow-lg py-12 px-6">Your days at a glance from the home page</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-White text-PokeBlue py-16 PokemonDigital tracking-tighter">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mt-4 mb-12">Ready to Start Journaling?</h2>
                    <Link to="signup" className="py-2 px-6 bg-PokeBlue text-White rounded-full shadow-lg hover:bg-opacity-70 transition duration-300">Sign Up Now</Link>
                </div>
                <div className="text-center mt-4">
                    <Link to="login" className="hover:opacity-70">Already have an account?</Link>
                </div>
            </section>
        </>
    );
}

export default LandingPage;
