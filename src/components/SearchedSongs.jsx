import { useEffect, useState } from "react";
import SectionContainer from "../components/layout/SectionContainer";
import SongList from "../components/layout/SongList";
import Loader from "../components/Loader.jsx";
import Song from "../components/Song";
import TopSearchSong from "../components/TopSearchSong.jsx";

export default function SearchedSongs({ accessToken, query, onAddFav, favorites }) {
  const [songs, setSongs] = useState([]);
  const topSearch = songs[0];

  useEffect(() => {
    if (!accessToken) return;

    const controller = new AbortController();
    const { signal } = controller;

    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.tracks.items);
        console.log(data.tracks.items);
      })
      .catch((error) => {
        if (error.name === "AbortError") return;

        console.error("Error:", error);
      });

    return function () {
      controller.abort();
    };
  }, [accessToken, setSongs, query]);

  return !songs.length ? (
    <Loader />
  ) : (
    <SectionContainer className={"mt-auto flex h-10/12 flex-col gap-2"}>
      <div className="flex">
        <TopSearchSong song={topSearch} />
      </div>
      <SongList>
        {songs.map((song) => (
          <Song
            song={song}
            key={song.id}
            onAddFav={onAddFav}
            favorites={favorites}
          />
        ))}
      </SongList>
    </SectionContainer>
  );
}
