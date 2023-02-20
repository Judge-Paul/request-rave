import React, { useState } from 'react';

function RequestPage({ socket }) {
  const [message, setMessage] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    socket.emit("message", message)
    setMessage("")
  }

  function handleChange(event) {
    setMessage(event.target.value)
  }

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-white text-center pb-4">Request Song</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label htmlFor="song-title" className="text-white">
            Song Title:
          </label>
          <input
            className="mb-5 w-72 border-0 h-14 rounded-lg pl-5"
            type="text"
            name="song-title"
            placeholder="Song or Artist Name"
            onChange={handleChange}
            value={message}
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
