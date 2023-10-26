import Poke from "./PokeTest";


export default function PokemonOfTheDay() {
    const dayOfYear = date =>
        Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    let pokeDay = dayOfYear(new Date())
    const urlday = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDay}.png`

    const d = new Date();
    let pokeHour = d.getHours();
    const urlHour = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeHour}.png`
    console.log('urlhour', urlHour)

    function randomPokemon() {
        const pokeNum1 = Math.floor(Math.random() * 1100) + 1;
        console.log(pokeNum1)
    }

    return (
        <div>
            <h1>Pokemon of the Day: </h1>
            <img src={urlday} alt="" />
            <p>{Poke()}</p>
            <p>{randomPokemon()}</p>
        </div>
    )
}