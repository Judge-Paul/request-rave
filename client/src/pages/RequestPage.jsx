import React, { useState } from 'react';
import axios from 'axios';
import Song from '../components/Song';

function RequestPage({ socket, accessToken }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState("Hi")

  function search(event) {
    event.preventDefault();
    axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&market=US&include_external=audio`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setResults(displayResults(response.data.tracks.items))
    })
    .catch(error => {
      console.error(error);
    });
    // socket.emit("song-name", tracksData)
    setSearchQuery("")
  }

  console.log(results)
  function displayResults(tracks) {
    const searchResultsEl = tracks.map(track => {
      return <Song 
        title={track.name} 
        artist={track.artists.map(((artist) => {
          artist.name += ", "
        }) )} 
        album={track.album.name} 
        albumCover={track.album.images[0]} 
      />
    })
    return searchResultsEl
  }

  // let searchResultEl;
  // function displayResults() {
  //   if (isResultAvailable) {
  //     searchResultEl = tracksData.map(song => {
  //       <Song title={tracksData.track}/>
  //     })
  //   }
  // }

  function handleChange(event) {
    setSearchQuery(event.target.value)
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
            value={searchQuery}
          />
          <button
            className="text-white h-14 w-72 rounded-xl bg-blue-900 border-0"
            type="submit"
          >
            Send Request
          </button>
        </form>
        {results}
      </div>
    </div>
  );
}

export default RequestPage;
