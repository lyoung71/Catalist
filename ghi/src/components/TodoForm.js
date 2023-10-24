import { useState } from "react";
import '../todo.css';
import useToken from "@galvanize-inc/jwtdown-for-react";

function TodoForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState('')
    const { token } = useToken()

    const handleNameChange = async (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleDescriptionChange = async (event) => {
        const value = event.target.value
        setDescription(value)
    }

    const handleCompletedChange = async (event) => {
        const value = event.target.value
        setCompleted(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.name = name
        data.description = description
        data.completed = completed

        const todoUrl = 'http://localhost:8000/api/todos/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(todoUrl, fetchConfig)
        if (response.ok) {
            setName('')
            setDescription('')
            setCompleted('')
        }
    }

    return (
        // <>
        //     <form onSubmit={(e) => handleChange(e)}>
        //         <input onChange={(e) => handleSubmit(e)} id="mood" value={journal.desc} placeholder="mood" type="text"></input>
        //     </form>
        // </>
        <div id="entirething">
            <div id="image"></div>
            <div id="journal">
                <form onSubmit={handleSubmit}>
                    <div className="border-blue-500 border-opacity-75">

                        <input className="input" type="text" onChange={handleNameChange} placeholder={"name"} value={name}></input>
                        <input className="input" type="text" onChange={handleCompletedChange} placeholder={"completed"} value={completed}></input>
                        <textarea
                            role="textbox"
                            id="textarea"
                            className="resize rounded-md"
                            rows={15}
                            columns={30}
                            name="description"
                            placeholder="cool"
                            value={description}
                            onChange={handleDescriptionChange}>
                        </textarea>

                    </div>
                    <button id="submit-button" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Submit
                    </button>
                </form >
                {/* <div id="RandomPokemon">{RandomPokemon()}</div> */}
            </div >
        </div>
    )
}

export default TodoForm;
