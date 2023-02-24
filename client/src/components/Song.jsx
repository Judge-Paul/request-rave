import React from "react";
import { FaFlag, FaPlay } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

export default function Song({ title, artist, album, albumCover, link, wasPlayed }) {
  return (
    <div className="border border-blue-900 rounded-lg bg-gray-100 mt-8 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
          <img src={albumCover} alt="Album Cover" width="100" className="rounded-lg" />
        </div>
        <div className="flex-1">
          <h4 className="text-2xl sm:text-3xl text-blue-900 font-bold truncate mb-1">
            {title}
          </h4>
          <p className="text-sm sm:text-base text-blue-400 truncate mb-1">
            {artist}
          </p>
          <p className="text-sm sm:text-base text-gray-500 truncate mb-2">
            {album}
          </p>
        </div>
        {(
          <div className="flex items-center mt-4 sm:mt-0">
            <Tooltip placement="top" title="Play on Spotify" arrow>
              <a href={link} className="mr-4">
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
