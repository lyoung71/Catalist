import { useState } from "react";
import PokemonOfTheDay from "./PokemonOfTheDay";
import useToken from "@galvanize-inc/jwtdown-for-react";
import PokemonOfTheHour from "./PokemonOfTheHour";
import PokemonOfTheMinute from "./PokemonOfTheMinute";
import { Link } from "react-router-dom";

export default function JournalForm() {
    const [mood, setMood] = useState('')
    const [desc, setDesc] = useState('')
    const [journalDate, setJournalDate] = useState('')
    const { token } = useToken()

    const handleMoodChange = async (event) => {
        const value = event.target.value
        setMood(value)
        console.log(desc)
    }

    const handleDescChange = async (event) => {
        const value = event.target.value
        setDesc(value)
        console.log(desc)
    }

    const handleJournalDateChange = async (event) => {
        const value = event.target.value
        setJournalDate(value)
        console.log(desc)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.mood = mood
        data.desc = desc
        data.journal_date = journalDate

        const journalUrl = 'http://localhost:8000/api/journals/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(journalUrl, fetchConfig)
        if (mood.length < 1) {
            alert("Please enter a mood!")
        }
        if (journalDate.length < 1) {
            alert("Please enter a date!")
        }
        if (desc.length < 1) {
            alert("Please enter at least 5 characters!")
        }
        if (response.ok && (mood.length + journalDate.length + desc.length >= 3)) {
            alert("Journal created!")
            setMood('')
            setDesc('')
            setJournalDate('')
        } else {
            alert.log("Please enter more info!")
        }
    }

    return (
        <div id="entirething">
            <div id="image"></div>

            <div id="journal">
                <div><Link to="/journals"><button id="back-to-journals-button" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Back to Journals!</button></Link></div>
                <form onSubmit={handleSubmit}>
                    <div className="border-blue-500 border-opacity-75">
                        <input className="input" type="text" onChange={handleJournalDateChange} placeholder={"date"} value={journalDate}></input>
                        <input className="input" type="text" onChange={handleMoodChange} placeholder={"mood"} value={mood}></input>
                        <textarea
                            role="textbox"
                            id="textarea"
                            className="resize rounded-md"
                            rows={15}
                            columns={30}
                            name="journalContent"
                            placeholder="I love pokemon!"
                            value={desc}
                            onChange={handleDescChange}>
                        </textarea>
                    </div>
                    <button id="submit-button" className="bg-PokeBlue text-PokeYellow hover:bg-opacity-80 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Submit
                    </button>

                </form >
                <div id="PokeCard" className="PokemonDigital">{PokemonOfTheDay()}
                </div>
            </div >
        </div>
    )
}
