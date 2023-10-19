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

  return (
    <>
      <div className="flex justify-center mt-10">
        <table className=" border-separate border-spacing-2 border border-slate-400">
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
                  <td className="px-6">{journal.mood}</td>
                  <td className="px-6">{journal.journal_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JournalList;
