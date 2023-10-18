import logo from "../content/logo.png"

function Nav1() {
    return (
        <>
            <nav>
                <div className="px-14">
                    <div className="flex justify-between Pokemon tracking-widest">
                        <div className="flex px-6">
                            <div className="items-center">
                                <a href="/" className="flex py-4 px-2">
                                    <img src={logo} alt="Brand Logo" className="h-10 w-10"></img>
                                    <span className="ml-3  text-PokeYellow bg-PokeBlue px-4 py-2 rounded hover:bg-opacity-80">Catalist</span>
                                </a>
                            </div>
                        </div>
                        <div className="md:flex items-center space-x-20 text-PokeBlue">
                            <a href="/" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 rounded px-4 py-2">Home</a>
                            <a href="/" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 rounded px-4 py-2">Services</a>
                            <a href="/" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 rounded px-4 py-2">About</a>
                            <a href="/" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 rounded px-4 py-2">Contact</a>
                        </div>
                        <div className="md:flex items-center space-x-4 py-5 px-6">
                            <a href="/signup" className="text-PokeYellow bg-PokeBlue hover:bg-opacity-80 rounded px-4 py-2">Sign Up</a>
                            <a href="/login" className="text-PokeBlue bg-PokeYellow hover:bg-opacity-70 rounded px-4 py-2">Log in</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav1;
