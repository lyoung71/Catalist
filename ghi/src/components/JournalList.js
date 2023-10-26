import { useState, useEffect } from "react";

function JournalList() {
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
    const response = await fetch(`http://localhost:8000/api/journals/${journalToDelete.id}` ,{
      method:"DELETE",

    });

    if(response.ok) {
      setJournals(prevJournals => prevJournals.filter(journal => journal.id != journalToDelete.id))

    }


  }

  useEffect(() => {
    getData();
  }, []);

  try {
    return (
      <>
        <div className="p-4 flex">
          <h1 className="text-3xl">My Journals</h1>
        </div>
        <div className="px-3 py-4flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Mood</th>
                <th className="text-left p-3 px-5">Date</th>
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
                      <a href={`/journals/${journal.id}`}>{journal.mood}</a>
                    </td>
                    <td className="px-6">{journal.journal_date}</td>
                    <td className="p-3 px-5 flex justify-end">
                      <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        href={`/journals/${journal.id}`}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
      </>
  );
} catch {
    return (
      <>
        <section className="bg-PokeYellow">
          <div  className="text-center my-10">
            <h1 className="text-PokeBlue PokemonDigital">
              You have no journals!
            </h1>
            <button className="bg-PokeBlue text-White px-2 py-2 rounded-full hover:bg-opacity-75 PokemonDigital">
              <a href="/">
                Create a Journal
              </a>
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default JournalList;
