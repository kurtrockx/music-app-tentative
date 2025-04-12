import { useEffect, useReducer, useRef, useState } from "react";
import SectionContainer from "../components/layout/SectionContainer";
import SongList from "../components/layout/SongList";
import Loader from "../components/Loader";
import Song from "../components/Song";
import ErrorPage from "./ErrorPage";

const initialState = { newlyReleased: [], limit: 16 };
function reducer(state, action) {
  switch (action.type) {
    case "setNewReleases":
      return { ...state, newlyReleased: action.payload };
    case "addTenSongs":
      return { ...state, limit: state.limit + 10 };
    default:
      return state;
  }
}

export default function NewReleasesPage({ accessToken, onAddFav, favorites }) {
  const [{ newlyReleased, limit }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const containerEndRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!accessToken) return;

    function fetchNewReleases() {
      fetch(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "setNewReleases", payload: data.albums.items });
        })
        .catch((error) => {
          setError(error.message);
        });
    }

    fetchNewReleases();
  }, [accessToken, limit]);

  useEffect(() => {
    const currentRef = containerEndRef.current;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch({ type: "addTenSongs" });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (containerEndRef.current) {
      observer.observe(containerEndRef.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [newlyReleased]);

  return error ? (
    <ErrorPage message={error} />
  ) : !newlyReleased.length ? (
    <Loader />
  ) : (
    <SectionContainer className={"mt-auto flex h-10/12 flex-col gap-2"}>
      <h1 className="font-bold text-white">New Releases</h1>
      <SongList>
        {newlyReleased.map((song) => (
          <Song
            song={song}
            key={song.id}
            newRelease={true}
            onAddFav={onAddFav}
            favorites={favorites}
          />
        ))}
        <div ref={containerEndRef}></div>
      </SongList>
    </SectionContainer>
  );
}
