import { React, useEffect, useState } from "react";

// export default function Poke() {
//     const [pokemon, setPokemon] = useState([])
//     const [loadMore, setloadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

//     const getAllPokemon = async () => {

//         const res = await fetch(loadMore)
//         const data = await res.json()

//         setloadMore(data.next)

//         function createPokemonObject(result) {
//             result.forEach(async (pokemon) => {
//                 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//                 const data = await res.json()
//                 setPokemon(currentList => ([...currentList, data]))
//                 console.log(data)
//             })
//         }
//         createPokemonObject(data.results)
//     }
//     useEffect(() => {
//         getAllPokemon()
//     }, [])
//     console.log(pokemon)
//     return (
//         <>
//             <h1></h1>
//         </>
//     )
// }

export default function Poke() {
    const [pokemon, setPokemon] = useState()
    const dayOfYear = date =>
        Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    let pokeDay = dayOfYear(new Date())

    const fetchData = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/297`
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setPokemon(data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log('pokemon', pokemon)

    return (
        <>
            <h1></h1>
        </>
    )
}