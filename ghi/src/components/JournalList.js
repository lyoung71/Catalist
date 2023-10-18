// import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";

function JournalList() {
  const [journals, setJournals] = useState([]);
  // const { token } = useToken();

  const getData = async () => {
    const response = await fetch("http://localhost:8000/api/journals/");

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
}

export default JournalList;
