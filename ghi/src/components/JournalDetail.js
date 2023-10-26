import { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useParams } from "react-router-dom";

function JournalDetail() {
  const [journal, setJournal] = useState({});
  const { token } = useToken();
  const { journal_id } = useParams();

  useEffect(() => {
    const fetchJournal = async () => {
      const response = await fetch(`http://localhost:8000/api/journals/${journal_id}`, {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setJournal(data);
      }
    };

    fetchJournal();
  }, [journal_id, token]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the journal state with the user's changes
    setJournal({ ...journal, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const journalUrl = `http://localhost:8000/api/journals/${journal_id}`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(journal), // Send the updated journal data
      headers: {
        Authorization: `Bearer ${token}`,
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
            id="save-button"
            className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default JournalDetail;































// import { useState, useEffect } from "react";
// import useToken from "@galvanize-inc/jwtdown-for-react";
// import { useParams } from 'react-router-dom';


//  function JournalDetail() {
//   const [mood, setMood] = useState("");
//   const [desc, setDesc] = useState("");
//   const [journalDate, setJournalDate] = useState("");
//   const [journal,setJournal] = useState({});
//   const [updatedData, setUpdatedData] = useState({});
//   const { token } = useToken();

// let {journal_id} = useParams()
//   console.log(journal_id)

//   const getData = async () => {
//     const fetchConfig = {
//       credentials: "include",
//     };
//     const response = await fetch(
//       `http://localhost:8000/api/journals/${journal_id}`,
//       fetchConfig
//     );
//     if (response.ok) {
//       const data = await response.json();
//       setJournal(data);
//     }
//     }
//     useEffect(() => {
//     getData();
//   }, []);

//   const handleMoodChange = async (event) => {
//     setUpdatedData({...updatedData, mood:event.target.value})
//   };

//   const handleDescChange = async (event) => {
//     setUpdatedData({...updatedData, desc:event.target.value})
//   };

//   const handleJournalDateChange = async (event) => {
//     setUpdatedData({...updatedData, journalDate:event.target.value})
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {};
//     data.mood = mood;
//     data.desc = desc;
//     data.journal_date = journalDate;

//     const journalUrl = "http://localhost:8000/api/journals/${journal_id}";
//     const fetchConfig = {
//       method: "PUT",
//       body: JSON.stringify(updatedData),
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const response = await fetch(journalUrl, fetchConfig);
//     if (response.ok) {
//       setMood("");
//       setDesc("");
//       setJournalDate("");
//     }

//     // const handleUpdate = (e) => {
//     //   setupdatedJournal({...updatedJournal,
//     //     mood: e.target.value,
//     //     desc: e.target.value,
//     //     journal_date: e.target.value
//     //   })
//     // }



//   };



//   return (

//     <div id="entirething">
//       <div id="image"></div>
//       <div id="journal">
//         <form onSubmit={handleSubmit}>
//           <div className="border-blue-500 border-opacity-75">
//             <input
//               className="input"
//               type="text"
//               onChange={handleJournalDateChange}
//               placeholder="date"
//               value={updatedData.journalDate || journal.journal_date}
//             ></input>
//             <input
//               className="input"
//               type="text"
//               onChange={handleMoodChange}
//               placeholder="mood"
//               value={updatedData.mood || journal.mood}
//             ></input>
//             <textarea
//               role="textbox"
//               id="textarea"
//               className="resize rounded-md"
//               rows={15}
//               columns={30}
//               name="journalContent"
//               placeholder="I love pokemon!"
//               value={updatedData.desc || journal.desc}
//               onChange={handleDescChange}
//             ></textarea>
//           </div>
//           <button
//             id="save-button"
//             className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default JournalDetail;







































































// import { useState, useEffect } from "react";
// import useToken from "@galvanize-inc/jwtdown-for-react";
// import { useParams } from 'react-router-dom';


//  function JournalDetail() {
//   const [mood, setMood] = useState("");
//   const [desc, setDesc] = useState("");
//   const [journalDate, setJournalDate] = useState("");
//   const [journal,setJournal] = useState({});
//   const [updatedJournal, setupdatedJournal] = useState({});
//   const { token } = useToken();

// let {journal_id} = useParams()
//   console.log(journal_id)

//   const getData = async () => {
//     const fetchConfig = {
//       credentials: "include",
//     };
//     const response = await fetch(
//       `http://localhost:8000/api/journals/${journal_id}`,
//       fetchConfig
//     );
//     if (response.ok) {
//       const data = await response.json();
//       setJournal(data);
//     }
//     }
//     useEffect(() => {
//     getData();
//   }, []);

//   const handleMoodChange = async (event) => {
//     const value = event.target.value;
//     setMood(value);
//     console.log(desc);
//   };

//   const handleDescChange = async (event) => {
//     const value = event.target.value;
//     setDesc(value);
//     console.log(desc);
//   };

//   const handleJournalDateChange = async (event) => {
//     const value = event.target.value;
//     setJournalDate(value);
//     console.log(desc);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {};
//     data.mood = mood;
//     data.desc = desc;
//     data.journal_date = journalDate;

//     const journalUrl = "http://localhost:8000/api/journals/{id}";
//     const fetchConfig = {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const response = await fetch(journalUrl, fetchConfig);
//     if (response.ok) {
//       setMood("");
//       setDesc("");
//       setJournalDate("");
//     }

//     const handleUpdate = (e) => {
//       setupdatedJournal({...updatedJournal,
//         mood: e.target.value,
//         desc: e.target.value,
//         journal_date: e.target.value
//       })
//     }



//   };



//   return (

//     <div id="entirething">
//       <div id="image"></div>
//       <div id="journal">
//         <form onSubmit={handleSubmit}>
//           <div className="border-blue-500 border-opacity-75">
//             <input
//               className="input"
//               type="text"
//               onChange={handleJournalDateChange}
//               placeholder="date"
//               value={journal.journal_date}
//             ></input>
//             <input
//               className="input"
//               type="text"
//               onChange={handleMoodChange}
//               placeholder={"mood"}
//               value={journal.mood}
//             ></input>
//             <textarea
//               role="textbox"
//               id="textarea"
//               className="resize rounded-md"
//               rows={15}
//               columns={30}
//               name="journalContent"
//               placeholder="I love pokemon!"
//               value={journal.desc}
//               onChange={handleDescChange}
//             ></textarea>
//           </div>
//           <button
//             id="submit-button"
//             className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default JournalDetail;
