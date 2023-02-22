import React, { useState } from 'react';
import axios from 'axios';
import Song from '../components/Song';
import { FaSearch } from 'react-icons/fa';

function RequestPage({ socket, accessToken }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState("")

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
    <div className="px-2 md:px-10 lg:px-40">
        <form 
          onSubmit={search} 
          className="flex flex-col gap-5 my-5 focus-within:outline outline-[2px] outline-blue-900 rounded"
        >
            <div class="flex items-center border-[1px] rounded border-blue-900">
              <input 
                type="text" 
                className="py-3 pl-6 pr-10 focus:outline-none rounded-l rounded-r-none w-full" 
                placeholder="Song or Artist Name" 
                onChange={handleChange} 
                value={searchQuery} 
              />
              <button 
                className="text-blue-900 pr-6" type="submit">
                <FaSearch size={"22px"} />
              </button>
            </div>
        </form>
        {results && 
          <div class="h-48 overflow-y-scroll overflow-x-hidden bg-gray-200">
            {results}
          </div>}
    </div>
  );
}

export default RequestPage;
