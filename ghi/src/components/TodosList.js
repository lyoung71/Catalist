import "../todos.css";
// import emerald from "../content/emerald.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodoList() {
    const [todos, setTodos] = useState([]);
    // const { token } = useToken();

    function toggleCompleted(id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const getData = async () => {
        const fetchConfig = {
            credentials: "include",
        };
        const response = await fetch(
            "http://localhost:8000/api/todos/",
            fetchConfig
        );

        if (response.ok) {
            const data = await response.json();
            setTodos(data);
        }
    };

    const handleDelete = async (todoToDelete) => {
        const response = await fetch(`http://localhost:8000/api/todos/${todoToDelete.id}`, {
            method: "DELETE",

        });

        if (response.ok) {
            setTodos(prevTodos => prevTodos.filter(todo => todo.id != todoToDelete.id))

        }


    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="todo-container">
            <div className="todolist-page">
                {/* <img src={emerald} alt="Background Description"></img> */}
                <h1 className="todo-heading">TO-DO LIST</h1>
            </div>
            {/* {todos.map(todo => {
                const cardWidth = {
                    width: "18rem"
                }
                return (
                    <div className="card" style={cardWidth} key={todo.id} id="card">
                        <div className="card-body">
                            <h3 className="card-title">{todo.name}</h3>
                            <p className="card-text">Description: {todo.description}</p>
                            <p className="card-text">Completed?: {todo.completed ? 'Yes' : 'No'}</p>
                            <p className="card-text">Created: {todo.created}</p>
                        </div>
                        <button onClick={() => handleDelete(shoe.id)} className="btn btn-info btn-small">Delete Shoe</button>
                    </div>
                ) */}
            {/* })} */}
            {/* <div className="card-container"> */}
            {/* <h1 className="table-heading">Todo List!</h1> */}
            {/* <div className="px-3 py-4flex justify-center"> */}
            <div className="todo-table-container">
                {/* <table className="w-full text-md bg-white shadow-md rounded mb-4"> */}
                <table className="todo-table">
                    <thead>
                        <tr id="table-heads" className="border-b">
                            <th className="text-left p-3 px-5">Task</th>
                            <th className="text-left p-3 px-5">Description</th>
                            <th className="text-left p-3 px-5">Status</th>
                            <th className="text-left p-3 px-5">Created On: </th>
                            <th className="text-left p-3 px-5">Completed:</th>
                            <th className="text-left p-3 px-5">Delete?: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => {
                            return (
                                <tr
                                    className="border-b hover:bg-orange-100 bg-gray-100"
                                    key={todo.id}
                                >
                                    <td className="px-6">
                                        <a href={todo.name}>{todo.name}</a>
                                    </td>
                                    <td className="px-6">{todo.description}</td>
                                    <td className="px-6">
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => toggleCompleted(todo.id)}
                                        />
                                    </td>
                                    <td className="px-6">{todo.created}</td>
                                    <td className="px-6">{todo.completed ? 'Yes' : 'No'}</td>
                                    <td className="p-3 px-5 flex justify-center dels">
                                        <button
                                            type="button"
                                            className="btn"
                                            onClick={() => handleDelete(todo)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="create-task-btn">
                <Link to="/todoform"><button id="new-task-btn" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Create a task!</button></Link>
            </div>
        </div>
    );
}

export default TodoList;
