import React from "react";
import { FaFlag, FaPlay, FaSpotify } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

export default function Song({ id, title, artist, album, albumCover, link, removeSong, wasPlayed }) {
  return (
    <div className="border border-blue-900 rounded-lg bg-gray-100 mt-8 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
          <img src={albumCover} alt="Album Cover" className="rounded-lg w-full sm:w-[100px]" />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl sm:text-3xl text-blue-900 font-bold truncate mb-1 w-52 sm:w-72 md:w-92 lg:w-[32rem] xl:w-[34rem]">
            {title}
          </h4>
          <p className="text-sm sm:text-base text-blue-400 truncate mb-1 w-52 sm:w-72 md:w-92 lg:w-[32rem] xl:w-[34rem]">
            {artist}
          </p>
          <p className="text-sm sm:text-base text-gray-500 truncate mb-2 w-52 sm:w-72 md:w-92 lg:w-[32rem] xl:w-[34rem]">
            {album}
          </p>
        </div>
        {(
          <>
          <div className="hidden sm:flex items-center mt-4 sm:mt-0">
            <Tooltip placement="top" title="Play on Spotify" arrow>
              <a href={link} target="_blank" className="mr-4">
                <FaPlay className="text-green-500" size="40px" />
              </a>
            </Tooltip>
            <Tooltip placement="top" title="Mark as unavailable" arrow>
              <button onClick={() => removeSong(id)}>
                <FaFlag className="text-red-500" size="40px" />
              </button>
            </Tooltip>
          </div>
          <div className="sm:hidden w-full">
            <a 
              href={link} 
              target="_blank" 
              className="flex text-2xl text-white font-bold justify-center w-full bg-green-500 hover:bg-green-300 py-5 rounded-xl"
            >
              Play on Spotify <FaSpotify size="30px" className="pl-1" />
            </a>
            <button
              onClick={() => removeSong(id)}
              className="mt-4 flex text-2xl text-white font-bold justify-center w-full bg-red-500 hover:bg-red-300 py-5 rounded-xl"
            >
              Mark as unavailable
            </button>
          </div>
          </>
        )}
      </div>
    </div>
  );
}
