import { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useParams } from 'react-router-dom';


 function JournalDetail() {
  const [mood, setMood] = useState("");
  const [desc, setDesc] = useState("");
  const [journalDate, setJournalDate] = useState("");
  const [journal,setJournal] = useState({});
  const [updatedJournal, setupdatedJournal] = useState("");
  const { token } = useToken();

let {journal_id} = useParams()
  console.log(journal_id)

  const getData = async () => {
    const fetchConfig = {
      credentials: "include",
    };
    const response = await fetch(
      `http://localhost:8000/api/journals/${journal_id}`,
      fetchConfig
    );
    if (response.ok) {
      const data = await response.json();
      setJournal(data);
    }
    }
    useEffect(() => {
    getData();
  }, []);

  const handleMoodChange = async (event) => {
    const value = event.target.value;
    setMood(value);
    console.log(desc);
  };

  const handleDescChange = async (event) => {
    const value = event.target.value;
    setDesc(value);
    console.log(desc);
  };

  const handleJournalDateChange = async (event) => {
    const value = event.target.value;
    setJournalDate(value);
    console.log(desc);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.mood = mood;
    data.desc = desc;
    data.journal_date = journalDate;

    const journalUrl = "http://localhost:8000/api/journals/{id}";
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(journalUrl, fetchConfig);
    if (response.ok) {
      setMood("");
      setDesc("");
      setJournalDate("");
    }

    // const handleUpdate = (e) => {
    //   setupdatedJournal({...updatedJournal,
    //     mood: e.target.value
    //     desc: e.target.value
    //     journal_date: e.target.value
    //   })
    // }



  };



  return (

    <div id="entirething">
      <div id="image"></div>
      <div id="journal">
        <form onSubmit={handleSubmit}>
          <div className="border-blue-500 border-opacity-75">
            <input
              className="input"
              type="text"
              onChange={handleJournalDateChange}
              placeholder={"date"}
              value={journal.journal_date}
            ></input>
            <input
              className="input"
              type="text"
              onChange={handleMoodChange}
              placeholder={"mood"}
              value={journal.mood}
            ></input>
            <textarea
              role="textbox"
              id="textarea"
              className="resize rounded-md"
              rows={15}
              columns={30}
              name="journalContent"
              placeholder="I love pokemon!"
              value={journal.desc}
              onChange={handleDescChange}
            ></textarea>
          </div>
          <button
            id="submit-button"
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
// import { NavLink } from "react-router-dom";

// function JournalDetail() {
//   const [journals, setJournals] = useState('');

//   const getData = async () => {
//     const fetchConfig = {
//       credentials: "include",
//     };
//     const response = await fetch(
//       "http://localhost:8000/api/journals/{id}",
//       fetchConfig
//     );

//     if (response.ok) {
//       const data = await response.json();
//       setJournals(data);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);


//   return (
//     <div
//       className="container mt-5"
//       style={{ maxWidth: "1000px", margin: "0 auto" }}
//     >
//       <h1 style={{ color: "white", textAlign: "center" }}>{journals.journal}</h1>
//       <br></br>
//       <br></br>
//       <div className="container" style={{justifyContent: "center"}}>
//         <div className="grid-container">
//           {
//             journals.map((journal) => (
//               <div className="card mb-5" style={{textAlign: "center", height:"100%", width:"300px"}} key={journal.id}>
//                 <h5>
//                   <NavLink
//                     to={`journals/${journals.id}`}
//                     style={{ color: "black", textDecoration: "none"}}
//                     onMouseEnter={(e) => (e.target.style.color = "#8B8000")}
//                     onMouseLeave={(e) => (e.target.style.color = "black")}
//                   >
//                     {journal.mood}
//                   </NavLink>
//                 </h5>
//                 <div className="card-body">
//                   <div className="image-wrapper">
//                     <NavLink to={`journals/${journal.id}`}>
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );

// }

// export default JournalDetail;
