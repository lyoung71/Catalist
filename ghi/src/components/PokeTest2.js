import { React, useEffect, useState } from "react";

export default function Poke2() {
    const [pokemon, setPokemon] = useState('')
    const [happiness, setHappiness] = useState('')
    const [flavortext, setFlavortext] = useState('')
    const d = new Date();
    let pokeHour = d.getHours();

    // const fetchData = async () => {
    //     const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeHour}`
    //     const response = await fetch(url)
    //     if (response.ok) {
    //         const data = await response.json()
    //         setPokemon(data.name)
    //         setHappiness(data.base_happiness)
    //         setFlavortext(data.flavor_text_entries[1]["flavor_text"])
    //     }
    // }

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeHour}`
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                setPokemon(data.name)
                setHappiness(data.base_happiness)
                setFlavortext(data.flavor_text_entries[1]["flavor_text"])
            }
        }; fetchData()
    }, [pokeHour])

    return (
        <>
            <p>#{pokeHour}: {pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</p>
            <p>Happiness: {happiness}</p>
            <p>Fun fact: {flavortext}</p>
        </>
    )
}
