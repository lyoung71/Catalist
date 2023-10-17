import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";

function JournalList() {
  const [journals, setJournals] = useState([]);
  const { token } = useToken();

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

// import useToken from "@galvanize-inc/jwtdown-for-react";
// import { useState, useEffect, useCallback } from "react";

// function JournalList() {
//   const [journals, setJournals] = useState([]);
//   const { token } = useToken();

//   const getData = useCallback(async () => {
//     const url = "http://localhost:8000/api/journals/";
//     const fetchConfig = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await fetch(url, fetchConfig);
//     if (response.ok) {
//       const data = await response.json();
//       setJournals(data.journals);
//     }
//   }, [token]);

//   useEffect(() => {
//     getData();
//   }, [token]);

//   return (
//     <>
//       <h1>Journals</h1>
// <table className="table table-striped">
//   <thead>
//     <tr>
//       <th>Mood</th>
//       <th>Date</th>
//     </tr>
//   </thead>
//   <tbody>
//     {journals?.map((journals) => {
//       return (
//         <tr key={journals.id}>
//           <td>{journals.mood}</td>
//           <td>{journals.date}</td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
//     </>
//   );
// }

// export default JournalList;

// <table className="table table-striped">
//   <thead>
//     <tr>
//       <th>Mood</th>
//       <th>Date</th>
//     </tr>
//   </thead>
//   <tbody>
//     {journals?.map((journals) => {
//       return (
//         <tr key={journals.id}>
//           <td>{journals.mood}</td>
//           <td>{journals.date}</td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>;
