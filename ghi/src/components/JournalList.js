import { useState, useEffect } from "react";
import "./index.css";

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
      <table className="table-auto">
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
}

export default JournalList;
