// import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";

function JournalList() {
  const [journals, setJournals] = useState([]);
  // const { token } = useToken();

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
      <div className="flex justify-center mt-10 shadow overflow-hidden rounded border-b border-gray-200">
        <table className="border-separate border-spacing-2 border border-slate-400 min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>Mood</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {journals.map((journal) => {
              return (
                <tr key={journal.id}>
                  <td className="px-6">
                    <a href={journal.mood}>{journal.mood}</a>
                  </td>
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
