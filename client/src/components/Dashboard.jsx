import React, { useState, useEffect } from "react";
import Song from "./Song";
import axios from "axios";

export default function Dashboard({ socket, accessToken }) {
  const [songs, setSongs] = useState([]);
  const [trackIds, setTrackIds] = useState([]);

  useEffect(() => {
    socket.on("receive-message", (trackId) => {
      setTrackIds((trackIds) => [...trackIds, trackId]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, [socket]);

  useEffect(() => {
    const requests = trackIds.map((trackId) => {
      let url = `https://api.spotify.com/v1/tracks/${trackId}`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          const songData = response.data;
          const artist = Array.isArray(songData.artists)
            ? songData.artists.map((a) => a.name).join(", ")
            : songData.artists && songData.artists.name;
          const song = (
            <Song
              key={songData.id}
              albumCover={songData.album.images[2].url}
              title={songData.name}
              artist={artist}
              album={songData.album.name}
              time="3:32"
            />
          );
          setSongs((prev) => [...prev, song]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [trackIds, accessToken]);

  return (
    <div className="min-h-screen pt-20 px-36 pb-14">
      <h1>Dashboard Page</h1>
      {songs}
      {/* <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul> */}
            {/* <p className="text-4xl md:text-5xl font-bold text-blue-900 text-center">
                Requests
            </p>
            <Song title="Rush" artist="Arya Starr" album="19 & Dangerous" time="4:09" />
            <Song title="Rapstar" artist="Polo G" album="Hall of Fame" time="3:32" />
            <Song title="Moonlight Sonata" artist="Ludwig Van Beethoven" album="" time="7:49" />
            <p className="pt-20 text-3xl md:text-4xl font-bold text-blue-900 text-center">
                Recently Played
            </p>
            <Song title="Rush" artist="Arya Starr" album="19 & Dangerous" time="4:09" isPlayable={played} />
            <Song title="Rapstar" artist="Polo G" album="Hall of Fame" time="3:32" isPlayable={played} /> */}
    </div>
  );
}
