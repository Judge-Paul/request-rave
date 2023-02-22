import React, { useState } from 'react';
import axios from 'axios';
import Song from '../components/Song';
import { FaSearch } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

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
        albumCover={track.album.images[0].url} 
      />
    })
    return searchResultsEl
  }

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="mx-2 md:mx-10 lg:mx-40 my-10 focus-within:outline outline-[2px] outline-blue-900 border-[1px] border-blue-900 rounded">
        <form 
          onSubmit={search} 
          className="flex flex-col gap-5"
        >
            <div class="flex items-center">
              {results && <button
                className="pl-5"
                onClick={()=> {
                  setResults("")
                  setSearchQuery("")
                }}
              >
                <GrFormClose size={"22px"} />
              </button>}
              <input 
                type="text" 
                className="py-3 pl-6 pr-10 focus:outline-none rounded-l rounded-r-none w-full" 
                placeholder="Song or Artist Name" 
                onChange={handleChange} 
                value={searchQuery} 
              />
              <button 
                className="text-blue-900 pr-6" type="submit"
              >
                <FaSearch size={"22px"} />
              </button>
            </div>
        </form>
        {results && 
          <div class="h-screen overflow-y-scroll px-2 md:px-8 pt-5">
            {results}
          </div>}
    </div>
  );
}

export default RequestPage;
