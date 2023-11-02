import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../todos.css";


export default function JournalList() {
  const [journals, setJournals] = useState([]);

  const getData = async () => {
    const fetchConfig = {
      credentials: "include",
    };
    const response = await fetch(
      "http://localhost:8000/api/journals/",
      fetchConfig
    );

    if (response.ok) {
      const data = await response.json();
      setJournals(data);
    }
  };

  const handleDelete = async (journalToDelete) => {
    const response = await fetch(`http://localhost:8000/api/journals/${journalToDelete.id}`, {
      method: "DELETE",

    });

    if (response.ok) {
      setJournals(prevJournals => prevJournals.filter(journal => journal.id !== journalToDelete.id))

    }


  }

  useEffect(() => {
    getData();
  }, []);

  try {
    return (
      <>
        <body>
          <div className="journals-container">
            <div className="todolist-page">
              <h1 className="todo-heading">My Journals</h1>
            </div>
            <div className="todo-table-container">
              <table className="todo-table">
                <thead>
                  <tr id="table-heads" className="border-b">
                    <th className="text-left p-3 px-5">Mood</th>
                    <th className="text-left p-3 px-5">Date</th>
                    <th className="text-left p-3 px-5">Edit</th>
                    <th className="text-left p-3 px-5">Delete</th>

                  </tr>
                </thead>
                <tbody>
                  {journals.map((journal) => {
                    return (
                      <tr
                        className="border-b hover:bg-orange-100 bg-gray-100"
                        key={journal.id}
                      >
                        <td className="px-6">
                          {journal.mood}
                        </td>
                        <td className="px-6">{journal.journal_date}</td>
                        <td className="p-3 px-5 flex justify-center dels">
                          <button
                            type="button" name="btn"
                            className="edit-btn"
                          >
                            <Link to={`/journals/${journal.id}`}>
                              Edit
                            </Link>
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => handleDelete(journal)}
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
            <div className="flex justify-center">
              <Link to="/journalform"><button id="submit-button" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Create a journal!</button></Link>
            </div>
          </div>
        </body >
      </>

    );
  } catch {
    return (
      <>
        <body>
          <section className="bg-PokeYellow">
            <div className="text-center my-10">
              <h1 className="text-PokeBlue PokemonDigital">
                You have no journals!
              </h1>
              <div className="flex justify-center">
                <Link to="/journalform"><button id="submit-button" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Create a journal!</button></Link>
              </div>
            </div>
          </section>
        </body>
      </>
    );
  }
}
