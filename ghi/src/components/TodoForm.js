// import { useState } from "react";
// import '../todo.css';
// import useToken from "@galvanize-inc/jwtdown-for-react";

// function TodoForm() {
//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')
//     const [date, setDate] = useState('')
//     const { token } = useToken()

//     const handleNameChange = async (event) => {
//         const value = event.target.value
//         setName(value)
//     }

//     const handleDescriptionChange = async (event) => {
//         const value = event.target.value
//         setDescription(value)
//     }

//     const handleDateChange = async (event) => {
//         const value = event.target.value
//         setDate(value)
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         const data = {}
//         data.name = name
//         data.description = description
//         data.created = date

//         const todoUrl = 'http://localhost:8000/api/todos/'
//         const fetchConfig = {
//             method: 'post',
//             body: JSON.stringify(data),
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             }
//         }

//         const response = await fetch(todoUrl, fetchConfig)
//         if (response.ok) {
//             setName('')
//             setDescription('')
//             setDate('')
//         }
//     }

//     return (

//         <div id="todoform-container">
//             <h1 className="form-title">Create a Task:</h1>
//             <div id="tdform">
//                 <form onSubmit={handleSubmit}>
//                     <div className="handles">
//                         <input
//                             className="todo-name"
//                             placeholder="Add todo"
//                             value={name}
//                             onChange={handleNameChange}
//                         />
//                         <input
//                             className="desc-todo"
//                             placeholder="Todo task description"
//                             value={description}
//                             onChange={handleDescriptionChange}
//                         />
//                         <input
//                             className="due-date"
//                             placeholder="Due date"
//                             value={date}
//                             onChange={handleDateChange}
//                         />
//                     </div>
//                     <button id="submit-button" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
//                         Submit
//                     </button>
//                 </form >
//             </div >
//         </div>
//     )
// }



// export default TodoForm;

import { useState } from "react";
import '../todo.css';
import useToken from "@galvanize-inc/jwtdown-for-react";

function TodoForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const { token } = useToken()

    const handleNameChange = async (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleDescriptionChange = async (event) => {
        const value = event.target.value
        setDescription(value)
    }

    const handleDateChange = async (event) => {
        const value = event.target.value
        setDate(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.name = name
        data.description = description
        data.created = date

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
            setDate('')
        }
    }

    return (

        <div id="todoform-container">
            <h1 className="form-title">Create a Task:</h1>
            <div id="tdform">
                <form onSubmit={handleSubmit}>
                    <div className="handles">
                        <input
                            className="todo-name"
                            placeholder="Add todo"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <input
                            className="desc-todo"
                            placeholder="Todo task description"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                        <input
                            className="due-date"
                            placeholder="Due date"
                            value={date}
                            onChange={handleDateChange}
                        />
                    </div>
                    <button id="submit-button" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Submit
                    </button>
                </form >
            </div >
        </div>
    )
}



export default TodoForm;
