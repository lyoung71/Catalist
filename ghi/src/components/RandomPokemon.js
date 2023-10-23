export default function RandomPokemon() {
    const pokeNum1 = Math.floor(Math.random() * 1100) + 1;
    const pokeNum2 = Math.floor(Math.random() * 1100) + 1;
    const pokeNum3 = Math.floor(Math.random() * 1100) + 1;
    const url1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum1}.png`
    const url2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum2}.png`
    const url3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum3}.png`
    return (
        <>
            <div>
                <h1>#{pokeNum1}</h1>
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
