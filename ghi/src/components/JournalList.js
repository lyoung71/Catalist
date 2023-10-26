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

  useEffect(() => {
    getData();
  }, []);

  try {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Mood</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {journals.map((journal) => {
              return (
                <tr key={journal.id}>
                  <td>{journal.mood}</td>
                  <td>{journal.journal_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  } catch {
    return (
      <>
        <section className="bg-PokeYellow">
          <div className="text-center my-10">
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
