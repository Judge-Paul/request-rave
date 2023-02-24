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
            setSongs(prev => {
                const newSong = (
                  <Song
                    key={songData.id}
                    albumCover={songData.album.images[2].url}
                    title={songData.name}
                    artist={artist}
                    album={songData.album.name}
                    time="3:32"
                  />
                );
                if (prev.find(song => song.key === newSong.key)) {
                  // Song already exists in the array, return previous array
                  return prev;
                } else {
                  // Add new song to the array
                  return [...prev, newSong];
                }
              });
              
          console.log(songs)
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [trackIds, accessToken]);

  return (
    <div className="min-h-screen pt-20 px-36 pb-14">
      <p className="text-4xl md:text-5xl font-bold text-blue-900 text-center">
        Requests
      </p>
      {songs}
      <p className="pt-20 text-3xl md:text-4xl font-bold text-blue-900 text-center">
        Recently Played
      </p>
    </div>
  );
}
