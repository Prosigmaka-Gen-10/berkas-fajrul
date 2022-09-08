import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SongForm() {
    let navigate = useNavigate()
    let params = useParams()

    let isEditing = params.songId

    let [formInput, setFormInput] = useState({
        song_title: '',
        song_lyric: '',
        song_album: ''
    })

    function handleInput(event, inputName) {
        let copyFormInput = { ...formInput }
        copyFormInput[inputName] = event.target.value
        setFormInput(copyFormInput)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        let payload = JSON.stringify(formInput)

        let targetUrl = isEditing ? 'http://localhost:3000/songs/' + params.songId
            : 'http://localhost:3000/songs'

        let method = isEditing ? 'PUT' : 'POST'

        await fetch(targetUrl, {
            method: method,
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        navigate('/songs')
    }

    async function getSongDetail () {
        let res = await fetch('http://localhost:3000/songs/' + params.songId)
        let data = await res.json()
        setFormInput(data)
    }

    useEffect(() => {
        if (isEditing) {
            getSongDetail()
        }
    }, [])

    return <>
        <h1>Form Song</h1>

        <Link to="/songs">
            Back to Song List
        </Link>

        <br /><br /><br />

        <form onSubmit={event => handleSubmit(event)}>
            <label>
                Song Title <br />
                <input
                    type="text"
                    value={formInput.song_title}
                    onChange={event => handleInput(event, 'song_title')} />
            </label>

            <br /><br />

            <label>
                Song Album <br />
                <input
                    type="text"
                    value={formInput.song_album}
                    onChange={event => handleInput(event, 'song_album')} />
            </label>

            <br /><br />

            <label>
                Song Lyric <br />
                <textarea
                    value={formInput.song_lyric}
                    onChange={event => handleInput(event, 'song_lyric')}
                ></textarea>
            </label>

            <br /><br />

            <button>
                Submit
            </button>
        </form>
    </>
}