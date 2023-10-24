import { useState, useEffect } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    // const { token } = useToken();


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

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="p-4 flex">
                <h1 className="text-3xl">My Todos</h1>
            </div>
            <div className="px-3 py-4flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Task</th>
                            <th className="text-left p-3 px-5">Description</th>
                            <th className="text-left p-3 px-5">Is completed</th>
                            <th className="text-left p-3 px-5">Created On: </th>
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
                                    <td className="px-6">{todo.completed ? 'Yes' : 'No'}</td>
                                    <td className="px-6">{todo.created}</td>
                                    <td className="p-3 px-5 flex justify-end">
                                        <button
                                            type="button"
                                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
        </>
    );
}

export default TodoList;
