import Poke2 from "./PokeTest2";


export default function PokemonOfTheHour() {
    const d = new Date();
    let pokeHour = d.getHours();
    const urlHour = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeHour}.png`
    console.log('urlhour', urlHour)
    return (
        <div>
            <h1>Pokemon of the Hour: </h1>
            <img src={urlHour} alt="" />
            <p>{Poke2()}</p>
        </div>
    )
}