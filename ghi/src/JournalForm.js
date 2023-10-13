import { useEffect, useState } from "react";

export default function JournalForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeId, setEmployeeId] = useState('')

    const handleFirstNameChange = async (event) => {
        const value = event.target.value
        setFirstName(value)
    }

    const handleLastNameChange = async (event) => {
        const value = event.target.value
        setLastName(value)
    }

    const handleEmployeeIdChange = async (event) => {
        const value = event.target.value
        setEmployeeId(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.first_name = firstName
        data.last_name = lastName
        data.employee_id = employeeId

        const techUrl = 'http://localhost:8080/api/technicians/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(techUrl, fetchConfig)
        if (response.ok) {
            const newTech = await response.json()
            setFirstName('')
            setLastName('')
            setEmployeeId('')
        }
    }

    return (
        <>
        <label>
      Edit your post:
      <textarea
        name="postContent"
        defaultValue="I really enjoyed biking yesterday!"
        rows={4}
        cols={40}
      />
    </label>
        <div className='row'>
            <div className="offset-3 col-6">
                <div className="shadow p4 mt-4">
                    <h1>Add a new technician</h1>
                    <form onSubmit={handleSubmit} id="create-tech-form">
                        <div className="form-floating mb-3">
                            <input value={firstName} onChange={handleFirstNameChange} placeholder="first name" required type="text" name="firstName" id="firstName" className="form-control" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={lastName} onChange={handleLastNameChange} placeholder="last name" required type="text" name="lastName" id="lastName" className="form-control" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={employeeId} onChange={handleEmployeeIdChange} placeholder="employee id" required type="text" name="employeeId" id="employeeId" className="form-control" />
                            <label htmlFor="employeeId">Employee Id</label>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )



}
