import React from "react";

export default function SearchItem({ id, onclick, albumCover, title, artists}) {
    
    const artist = Array.isArray(artists) ? artists.map(a => a.name).join(", ") : (artists && artists.name)
    return (
        <button 
            onClick={() => onclick(id, title, artist)}
            className="flex mb-3 hover:bg-gray-100 hover:pointer active:bg-gray-300 w-full"
        >
                <img src={albumCover} alt="Icon" width="100px" className="rounded" />
                <div className="my-auto ml-2 md:ml-10">
                    <h4 className="text-left text-2xl font-bold truncate w-40 sm:w-80 md:w-96 xl:w-[32rem]">
                        {title}
                    </h4>
                    <p className="text-left text-gray-400 truncate w-40 sm:w-80 md:w-96">
                        {artist}
                    </p>
                </div>
        </button>
    )
}