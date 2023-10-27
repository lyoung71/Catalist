import { useState } from "react";
import '../todo.css';
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";

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

    const handleCreatedChange = async (event) => {
        const value = event.target.value
        setCreated(value)
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

        // <> DELETE HERE
        //     <form onSubmit={(e) => handleChange(e)}>
        //         <input onChange={(e) => handleSubmit(e)} id="mood" value={journal.desc} placeholder="mood" type="text"></input>
        //     </form>
        // </>

        //   <input
        //     className="todo-input"
        //     placeholder="Add todo"
        //     value={text}
        //     onChange={handleChange}
        //   /> TO HERE

        <div id="todoform-container">
            <div id="image"></div>
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
                    <button id="submit-button" onClick={handleSubmit} className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Submit
                    </button>
                </form >
            </div >
        </div>
    )
}



export default TodoForm;

//     return (
//         <div id="todoform- container">
//             <div className="todoform-page">
//                 {/* <img src={emerald} alt="Background Description"></img> */}
//                 <h1 className="todoform-heading">TO-DO LIST</h1>
//             </div>
//             <div className="form-table-container">
//                 <form onSubmit={handleSubmit}>
//                     {/* <table className="w-full text-md bg-white shadow-md rounded mb-4"> */}
//                     <table className="todoform-table">
//                         <thead>
//                             <tr id="table-heads" className="border-b">
//                                 <th className="text-left p-3 px-5">Task Name</th>
//                                 <th className="text-left p-3 px-5">Description</th>
//                                 <th className="text-left p-3 px-5">Date:</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* {todos.map((todo) => {
//                             return ( */}
//                             <tr>
//                                 <td>
//                                     <input>
//                                         className="todo-name"
//                                         placeholder="Add todo"
//                                         value={name}
//                                         onChange={handleNameChange}
//                                     </input>
//                                 </td>
//                                 <td>
//                                     <input>
//                                         className="due-date"
//                                         placeholder="due-date-task"
//                                         value={date}
//                                         onChange={handleDateChange}
//                                     </input>
//                                 </td>
//                                 <td>
//                                     <input>
//                                         className="todoform-description"
//                                         placeholder="add description"
//                                         value={description}
//                                         onChange={handleDescriptionChange}
//                                     </input>
//                                 </td>
//                             </tr>
//                             {/* //     );
//                         // })} */}
//                         </tbody>
//                     </table>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default TodoForm;
