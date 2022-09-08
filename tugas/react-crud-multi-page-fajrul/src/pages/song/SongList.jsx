import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SongList() {

    let [songs, setSongs] = useState([])

    async function getSongs() {
        let res = await fetch('http://localhost:3000/songs')
        let data = await res.json()
        setSongs(data)
    }

    async function deleteSong (songId) {
        await fetch('http://localhost:3000/songs/' + songId, {
            method: 'DELETE'
        })

        getSongs()
    }

    useEffect(() => {
        getSongs()
    }, [])

    return <>
        <h1>List Songs</h1>

        <Link to="/songs/form">
            Register New Song
        </Link>

        <table width="100%" border="1">
			<thead>
				<tr>
					<th>Title</th>
					<th>Album</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{songs.map(song =>
					<tr>
						<td>{song.song_title}</td>
						<td>{song.song_album}</td>
						<td>
							<Link to={"/songs/form/" + song.id}>
								<button>Edit</button>
							</Link>
							&nbsp;
							<button onClick={() => deleteSong(song.id)}>Delete</button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
    </>
}