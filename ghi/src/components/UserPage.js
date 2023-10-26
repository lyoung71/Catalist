import React from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import Meme from "../content/meme1.png"
import Chimchar from "../content/chimchar.png"
import Pika from "../content/pika.png"
import Eevee from "../content/eevee.png"
import Jigglypuff from "../content/jigglypuff.png"

function UserPage() {
    const { token } = useToken();

    if (token) {
        return (
            <>
                <div className="flex w-full items-center justify-center py-4 bg-PokeBlue PokemonDigital">
                    <div className="mr-auto ml-auto">
                        <img className="max-w-xs pb-2 rounded-lg " src={Pika} alt="..." />
                    </div>

                    <div className="bg-White p-3 rounded-lg shadow-xl">
                        <img className="max-w-xs pb-2 rounded-lg" src={Meme} alt="..."></img>
                        <p className="w-full  bg-PokeBlue text-PokeYellow text-center rounded-md px-4 py-4">Meme of the Day!</p>
                    </div>

                    <div className="ml-auto mr-auto">
                        <img className="max-w-xs pb-2 rounded-lg " src={Chimchar} alt="..." />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center py-4 bg-PokeYellow">
                    <div className="mx-auto">
                        <img className="max-w-xs pb-2 rounded-lg " src={Jigglypuff} alt="..." />
                    </div>

                    <div className="bg-White p-8 rounded-lg shadow-xl PokemonDigital">
                        <h1 className="text-2xl font-semibold text-center text-PokeBlue">Welcome Back </h1>
                        <div className="flex justify-center px-3">
                            <button className="w-full bg-PokeBlue text-PokeYellow rounded-md px-4  hover:bg-opacity-80">
                                <a href="/journals">Start a Journal</a>
                            </button>
                            <button className="w-full ml-10 bg-PokeBlue text-PokeYellow rounded-md px-4 py-4 hover:bg-opacity-80">
                                <a href="/journals">View All Journals</a>
                            </button>
                            <button className="w-full ml-10 bg-PokeBlue text-PokeYellow rounded-md px-4  hover:bg-opacity-80">
                                <a href="/todos">To-Do List</a>
                            </button>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <img className="max-w-xs pb-2 rounded-lg " src={Eevee} alt="..." />
                    </div>
                </div>
            </>
        );
    }
}

export default UserPage;
