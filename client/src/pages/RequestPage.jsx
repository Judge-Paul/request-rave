import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import CircularProgress from '@mui/material/CircularProgress';
import SearchItem from '../components/SearchItem';

function RequestPage({ socket, accessToken }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function search(event) {
    if (!isLoading) {
      setResults("")
      setIsLoading(true)
      event.preventDefault();
      axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&market=US&include_external=audio`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        console.log(response.data.tracks.items[0].artists)
        setResults(displayResults(response.data.tracks.items))
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
    }
    // socket.emit("song-name", tracksData)
  }

  function displayResults(tracks) {
    const searchResultsEl = tracks.map(track => {
      return <SearchItem
        title={track.name} 
        artists={track.artists} 
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
            <div className="flex">
              {results && <button
                className="pl-5"
                type="button"
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
                {!isLoading ? <FaSearch size="22px" /> : <CircularProgress size="22px" />}
              </button>
            </div>
        </form>
        {results !== "" && 
          <div className="h-3/5 overflow-y-scroll px-4 md:px-6">
            {results}
          </div>}
    </div>
  );
}

export default RequestPage;
