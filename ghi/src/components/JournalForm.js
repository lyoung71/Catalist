import { useEffect, useState } from "react";

export default function JournalForm() {
    const [mood, setMood] = useState('')
    const [journalForm, setJournalForm] = useState('')

    const Change = async (event) => {
        const value = event.target.value
        setJournalForm(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.mood = mood
        data.journalForm = journalForm

        const journalUrl = 'http://localhost:8000/api/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(journalUrl, fetchConfig)
        if (response.ok) {
            const newJournal = await response.json()
            setJournalForm(newJournal)
        }
    }

    return (
        <>
            <div className="shadow p4 mt-4">
                <h1>Your day</h1>
                <form onSubmit={handleSubmit} id="create-tech-form">
                    <div className="form-floating mb-3">
                        <label>
                            Your day
                            <textarea
                                name="postContent"
                                defaultValue="I really enjoyed biking yesterday!"
                                rows={4}
                                cols={40}
                            />
                        </label>
                        {/* <input value={firstName} onChange={handleFirstNameChange} placeholder="first name" required type="text" name="firstName" id="firstName" className="form-control" />
                                <label htmlFor="firstName">First Name</label> */}
                        <button onClick={handleSubmit} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )



}
