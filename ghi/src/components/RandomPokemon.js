

export default function RandomPokemon() {
    const dayOfYear = date =>
        Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    let pokeDay = dayOfYear(new Date())
    const urlday = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDay}.png`

    return (
        <>
            <h1>Pokemon of the Day: </h1>
            <div>
                <h1>#{pokeDay}</h1>
                <img src={urlday} alt="" />
            </div>
        </>
    )
}