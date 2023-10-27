import { useState, useEffect } from "react";
import PokemonOfTheDay from "./PokemonOfTheDay"
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import { useParams } from "react-router-dom";
import PokemonOfTheHour from "./PokemonOfTheHour";

function JournalDetail() {
  const [journal, setJournal] = useState({});
  const { token } = useAuthContext();
  const { journal_id } = useParams();


  useEffect(() => {
    const fetchJournal = async () => {
      const response = await fetch(`http://localhost:8000/api/journals/${journal_id}`, {
        credentials: "include"
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      if (response.ok) {
        const data = await response.json();
        setJournal(data);
      }
    };

    fetchJournal();
  }, [journal_id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJournal({ ...journal, [name]: value });
  };

  const handleSubmit = async () => {

    const journalUrl = `http://localhost:8000/api/journals/${journal_id}`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(journal),
      headers: {
        // credentials: "include",
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(journalUrl, fetchConfig);

    if (response.ok) {

      // Optionally, reset form inputs or perform other actions after a successful update
      // For example, you can set a success message or navigate to a different page
    }
  };

  return (
    <div id="entirething">
      {/* ... */}
      <div id="image2"></div>
      <div id="journal">
        <form onSubmit={handleSubmit}>
          <div className="border-blue-500 border-opacity-75">
            <input
              className="input"
              type="text"
              name="journal_date"
              onChange={handleInputChange}
              placeholder="date"
              value={journal.journal_date || ""}
            ></input>
            <input
              className="input"
              type="text"
              name="mood"
              onChange={handleInputChange}
              placeholder="mood"
              value={journal.mood || ""}
            ></input>
            <textarea
              role="textbox"
              id="textarea"
              className="resize rounded-md"
              rows={15}
              columns={30}
              name="desc"
              placeholder="I love Pokemon!"
              value={journal.desc || ""}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            id="submit-button"
            onClick={handleSubmit}
            className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Save
          </button>
        </form>
        <div id="PokeCard2" className="PokemonDigital">{PokemonOfTheHour()}</div>
      </div>
    </div>
  );
}

export default JournalDetail;
