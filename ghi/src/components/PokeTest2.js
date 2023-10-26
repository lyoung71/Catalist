import { React, useEffect, useState } from "react";

export default function Poke2() {
    const [pokemon, setPokemon] = useState('')
    const [happiness, setHappiness] = useState('')
    const [flavortext, setFlavortext] = useState('')
    const d = new Date();
    let pokeHour = d.getHours();

    const fetchData = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeHour}`
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setPokemon(data.name)
            setHappiness(data.base_happiness)
            setFlavortext(data.flavor_text_entries[0]["flavor_text"])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log('pokemon', pokemon)
    console.log('happiness', happiness)
    console.log('flavortext', flavortext)

    return (
        <>
            <p>#{pokeHour}</p>
            <p>Happiness: {happiness}</p>
            <p>Fun fact: {flavortext}</p>
        </>
    )
}