import React from "react";
import { FaFlag, FaPlay } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

export default function Song({ title, artist, album, albumCover, link, wasPlayed }) {
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
          <div className="flex items-center mt-4 sm:mt-0">
            <Tooltip placement="top" title="Play on Spotify" arrow>
              <a href={link} target="_blank" className="mr-4">
                <FaPlay className="text-green-500" size="40px" />
              </a>
            </Tooltip>
            <Tooltip placement="top" title="Mark as unavailable" arrow>
              <button>
                <FaFlag className="text-red-500" size="40px" />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
}
