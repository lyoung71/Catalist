import { React, useEffect, useState } from "react";

export default function Poke() {
    const [pokemon, setPokemon] = useState([])
    const [loadMore, setloadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemon = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setloadMore(data.next)

        function createPokemonObject(result) {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setPokemon(currentList => ([...currentList, data]))
                console.log(data)
            })
        }
        createPokemonObject(data.results)
    }
    useEffect(() => {
        getAllPokemon()
    }, [])
    console.log(pokemon)
    return (
        <>
            <h1></h1>
        </>
    )
}