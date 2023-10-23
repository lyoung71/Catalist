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
//       <div className="bin-container" style={{justifyContent: "center"}}>
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
