import { React, useEffect, useState } from "react";

export default function Poke3() {
    const [pokemon, setPokemon] = useState('')
    const [happiness, setHappiness] = useState('')
    const [flavortext, setFlavortext] = useState('')
    const d = new Date();
    let pokeMinute = d.getMinutes();

    const fetchData = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeMinute}`
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setPokemon(data.name)
            setHappiness(data.base_happiness)
            setFlavortext(data.flavor_text_entries[1]["flavor_text"])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <p>#{pokeMinute}: {pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</p>
            <p>Happiness: {happiness}</p>
            <p>Fun fact: {flavortext}</p>
        </>
    )
}