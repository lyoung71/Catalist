import Poke3 from "./PokeTest3";


export default function PokemonOfTheMinute() {
    const d = new Date();
    let pokeMinute = d.getMinutes();
    const urlMinute = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeMinute}.png`
    return (
        <div>
            <h1>Pokemon of the Minute: </h1>
            <img src={urlMinute} alt="" />
            <div>{Poke3()}</div>
        </div>
    )
}