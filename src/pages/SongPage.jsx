import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionContainer from "../components/layout/SectionContainer";
import SongList from "../components/layout/SongList";
import Loader from "../components/Loader.jsx";
import Song from "../components/Song";
import TopSearchSong from "../components/TopSearchSong.jsx";

export default function SongPage({ accessToken }) {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  const topSearch = songs[0];
  const songList = songs.slice(1);

  useEffect(() => {
    if (!accessToken) return;

    fetch(`https://api.spotify.com/v1/search?q=${id}&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.tracks.items);
      })
      .catch((error) => console.error("Error:", error));
  }, [accessToken, id, setSongs]);

  return !songs.length ? (
    <Loader />
  ) : (
    <SectionContainer className={"flex h-10/12 flex-col gap-2 mt-auto"}>
      <div className="flex">
        <TopSearchSong song={topSearch} />
      </div>
      <SongList>
        {songList.map((song) => (
          <Song song={song} key={song.id} />
        ))}
      </SongList>
    </SectionContainer>
  );
}
