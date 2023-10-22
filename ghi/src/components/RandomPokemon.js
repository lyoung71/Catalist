
export default function RandomPokemon() {
    const dayOfYear = date =>
        Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    let pokeDay = dayOfYear(new Date())
    // const url1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDay}.png`


    const pokeNum1 = Math.floor(Math.random() * 1100) + 1;
    const pokeNum2 = Math.floor(Math.random() * 1100) + 1;
    const pokeNum3 = Math.floor(Math.random() * 1100) + 1;
    const url1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum1}.png`
    const url2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum2}.png`
    const url3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum3}.png`
    return (
        <>
            <h1>Pokemon of the Day</h1>
            {/* <div>
                <img src {url1} alt="" />
            </div> */}
            <div>
                <h1>#{pokeDay}</h1>
                <img src={url1} alt="" />
            </div>
            <div>
                <h1>#{pokeNum2}</h1>
                <img src={url2} alt="" />
            </div>
            <div>
                <h1>#{pokeNum3}</h1>
                <img src={url3} alt="" />
            </div>
        </>
    )
}