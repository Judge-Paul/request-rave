import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import CircularProgress from '@mui/material/CircularProgress';
import SearchItem from './SearchItem';
import DialogModal from './ConfirmModal';

function Request({ socket, accessToken }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState("")

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
        setResults(displayResults(response.data.tracks.items))
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  function selectTrack(id) {
    setShowModal(true)
    setSelected(id)
  }

  function displayResults(tracks) {
    const searchResultsEl = tracks.map(track => {
      return <SearchItem
        id={track.id}
        key={track.id}
        title={track.name} 
        artists={track.artists} 
        album={track.album.name} 
        albumCover={track.album.images[0].url} 
        onclick={selectTrack}
      />
    })
    return searchResultsEl
  }

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  return (
    <>
        {showModal && <DialogModal showModal={showModal} selectedId={selected} socket={socket} />}
        <p className="text-4xl md:text-5xl font-bold text-blue-900 text-center mt-10">
            Select a track
        </p>
        <div className="mx-2 md:mx-10 lg:mx-40 mt-6 focus-within:outline outline-[2px] outline-blue-900 border-[1px] border-blue-900 rounded">
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
                    <GrFormClose size={"30px"} />
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
            <div className="h-screen overflow-y-scroll px-4 md:px-6">
                {results}
            </div>}
        </div>
    </>
  );
}

export default Request;
