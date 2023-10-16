// import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";

function JournalList() {
  const [journals, setJournals] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/api/journals/");

    if (response.ok) {
      const data = await response.json();
      setJournals(data.journals);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Journals</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mood</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {journals?.map((journals) => {
            return (
              <tr key={journals.id}>
                <td>{journals.mood}</td>
                <td>{journals.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default JournalList;
