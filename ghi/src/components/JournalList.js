import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";

function JournalList() {
  const [journals, setJournals] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/api/journals");

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
            <th>Salesperson Employee ID</th>
            <th>Salesperson Name</th>
          </tr>
        </thead>
        <tbody>
          {journals.map((journal) => {
            return (
              <tr key={journal.id}>
                <td>{sales.salesperson.employee_id}</td>
                <td>
                  {sales.salesperson.first_name} {sales.salesperson.last_name}
                </td>
                <td>
                  {sales.customer.first_name} {sales.customer.last_name}
                </td>
                <td>{sales.automobile.vin}</td>
                <td>${sales.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
