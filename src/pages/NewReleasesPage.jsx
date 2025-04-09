import { useEffect, useReducer } from "react";
import MainContainer from "../components/layout/MainContainer";
import SectionContainer from "../components/layout/SectionContainer";
import SongList from "../components/layout/SongList";
import Loader from "../components/Loader";
import Song from "../components/Song";

const newReleases = {
  initialSongs: [],
  pageNumber: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "setNewReleases":
      return { ...state, initialSongs: action.payload };
  }
}

export default function NewReleasesPage({ accessToken }) {
  
  const [{ initialSongs, pageNumber }, dispatch] = useReducer(
    reducer,
    newReleases,
  );

  useEffect(() => {
    if (!accessToken) return;
    fetch(
      `https://api.spotify.com/v1/browse/new-releases?limit=14&offset=${0}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "setNewReleases", payload: data.albums.items });
      })
      .catch((error) => console.error("Error:", error));
  }, [accessToken]);

  return !initialSongs.length ? (
    <Loader />
  ) : (
    <SectionContainer className={"mt-auto flex h-10/12 flex-col gap-2"}>
      <h1 className="font-bold text-white">New Releases</h1>
      <SongList>
        {initialSongs.map((song) => (
          <Song song={song} key={song.id} newRelease={true} />
        ))}
      </SongList>
    </SectionContainer>
  );
}
