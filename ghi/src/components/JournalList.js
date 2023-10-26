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
      <h1 className="text-3xl text-center ">My Journals</h1>
      <div className="flex h-screen justify-center items-center">
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
                      <a href={journal.desc}>{journal.mood}</a>
                    </td>
                    <td className="px-6">{journal.journal_date}</td>
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
      </div>
    </>
  );
}

export default JournalList;
