import { useState } from "react";
import '../index.css';
import route119 from "../content/route119.png"
import Carousel from "./Carousel";
// import useToken from "@galvanize-inc/jwtdown-for-react";

export default function JournalForm() {
    const [mood, setMood] = useState()
    const [desc, setDesc] = useState()

    // const [formData, setFormData] = useState({
    //     mood: "",
    //     desc: ""
    // })

    // function handle(e) {
    //     const newJournal = { ...journal }
    //     newJournal[e.target.id] = e.target.value
    //     setJournalForm(newJournal)
    //     console.log(newJournal)
    // }

    // const { token } = useToken()

    const handleMoodChange = async (event) => {
        const value = event.target.value
        setMood(value)
    }

    const handleDescChange = async (event) => {
        const value = event.target.value
        setDesc(value)
        console.log(desc)
    }

    // const handleFormChange = (e) => {
    //     const value = e.target.value;
    //     const inputName = e.target.name;

    //     setFormData(formData => ({
    //         ...formData,
    //         [inputName]: value
    //     }))
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {}
        data.mood = mood
        data.desc = desc

        const journalUrl = 'http://localhost:8000/api/journals/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization: `Bearer ${token}'
            }
        }

        const response = await fetch(journalUrl, fetchConfig)
        if (response.ok) {
            console.log("HELLO WORLD")
            const newJournal = await response.json()
            setMood('')
            setDesc('')
        }
    }


    return (
        // <>
        //     <form onSubmit={(e) => handleChange(e)}>
        //         <input onChange={(e) => handleSubmit(e)} id="mood" value={journal.desc} placeholder="mood" type="text"></input>
        //     </form>
        // </>
        <>
            <div id="image"></div>
            <div id="journal">
                <h1 className="border-gray-400 focus:border-blue-500" id="journal-title">Your day</h1>
                <form onSubmit={handleSubmit}>
                    <div className="border-blue-500 border-opacity-75">
                        <label>
                            <input id="mood" type="text" onChange={handleMoodChange} placeholder={"Mood"}></input>
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
                        </label>
                    </div>
                    <button id="submit-button" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Submit
                    </button>
                </form >
            </div >
        </>
    )
}
