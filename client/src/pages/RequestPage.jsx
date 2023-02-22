import React, { useState } from 'react';
import axios from 'axios';
import Song from '../components/Song';

function RequestPage({ socket, accessToken }) {
  const [songName, setSongName] = useState("")
  const [trackData, setTrackData] = useState(null)

  function search(event) {
    event.preventDefault();
    axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(songName)}&type=track&market=US&include_external=audio`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      console.log(response)
      setTrackData(response.data.tracks.items);
    })
    .catch(error => {
      console.error(error);
    });
    socket.emit("song-name", trackData)
    setSongName("")
  }

  // let searchResultEl;
  // function displayResults() {
  //   if (isResultAvailable) {
  //     searchResultEl = trackData.map(song => {
  //       <Song title={trackData.track}/>
  //     })
  //   }
  // }

  function handleChange(event) {
    setSongName(event.target.value)
  }

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-white text-center pb-4">Request Song</h2>
        <form onSubmit={search} className="flex flex-col gap-5">
          <label htmlFor="song-title" className="text-white">
            Song Title:
          </label>
          <input
            className="mb-5 w-72 border-0 h-14 rounded-lg pl-5"
            type="text"
            name="song-title"
            placeholder="Song or Artist Name"
            onChange={handleChange}
            value={songName}
          />
          <button
            className="text-white h-14 w-72 rounded-xl bg-blue-900 border-0"
            type="submit"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestPage;
