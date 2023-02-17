import React from 'react';

function RequestPage() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-white text-center pb-4">Request Song</h2>
        <div className="flex flex-col gap-5">
          <label className='text-white'>DJ: <span className="font-bold">YK Mule</span></label>
          <label htmlFor="requester-name" className="text-white">
            Requester Name:
          </label>
          <input
            className="mb-5 w-72 border-0 h-14 rounded-lg pl-5"
            type="text"
            id="requester-name"
            name="requester-name"
            placeholder="Requester Name:"
          />
          <label htmlFor="song-title" className="text-white">
            Song Title:
          </label>
          <input
            className="mb-5 w-72 border-0 h-14 rounded-lg pl-5"
            type="text"
            id="song-title"
            name="song-title"
            placeholder="Song Title:"
          />
          <button
            className="text-white h-14 w-72 rounded-xl bg-blue-900 border-0"
            type="submit"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;
