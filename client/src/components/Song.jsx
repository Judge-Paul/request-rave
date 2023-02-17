import React from "react";
import IconLogo from "../assets/icon.png"
import { FaFlag, FaPlay } from "react-icons/fa"
import Tooltip from "@mui/material/Tooltip"

export default function Song({title, artist, album, time, played}) {
    return (
        <div className="flex border border-black rounded-lg bg-gray-100 mt-10">
            <img src={IconLogo} alt="Icon" width="100px" />
            <div className="my-auto pl-10">
                <h4 className="text-3xl text-blue-900 font-bold">
                    {title}
                </h4>
                <p className="text-blue-400">
                    {artist}
                </p>
            </div>
            <div className="flex my-auto ml-auto">
                <p className="my-auto">
                    {album}
                </p>
                <p className="pl-10 text-2xl text-blue-400 font-bold pr-14">
                    {time}
                </p>
                {/* Displays this section if the songs have been played*/}
                {!played && <div className="flex my-auto pr-10">
                    <Tooltip placement="top" title="Play" arrow>
                        <button>
                            <FaPlay className="text-green-500 mr-2" />
                        </button>
                    </Tooltip>
                    <Tooltip placement="top" title="Mark as unavailable" arrow>
                        <button>
                            <FaFlag className="text-red-500" />
                        </button>
                    </Tooltip>
                </div>}
            </div>
        </div>
    )
}