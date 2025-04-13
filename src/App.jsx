import {  HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/HomePage";
import SongPage from "./pages/SongPage";
import FavoritePage from "./pages/FavoritePage";
import useSpotifyToken from "./hooks/useSpotifyToken";
import NewReleasesPage from "./pages/NewReleasesPage";
import MainContainer from "./components/layout/MainContainer";
import Navbar from "./components/Navbar";

const clientId = "fc11c6d55eee4959a8ce90156b0e90ae";
const clientSecret = "e7d5a5b1d4ed455c933c9522e4782d77";
const base64Credentials = btoa(`${clientId}:${clientSecret}`);

export default function App() {
  const accessToken = useSpotifyToken(base64Credentials);

  const [favorites, setFavorites] = useState([]);

  function handleAddFavorite(song, newRelease) {
    const alreadyFav = favorites.filter((fav) => fav.id === song.id).length;
    if (alreadyFav)
      return setFavorites((favs) => favs.filter((fav) => fav.id !== song.id));
    setFavorites((favs) => [...favs, { ...song, newRelease }]);
  }

  return (
    <HashRouter>
      <MainContainer>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route
            path="/newRelease"
            element={
              <NewReleasesPage
                accessToken={accessToken}
                onAddFav={handleAddFavorite}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SongPage
                accessToken={accessToken}
                onAddFav={handleAddFavorite}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <FavoritePage
                onAddFav={handleAddFavorite}
                favorites={favorites}
              />
            }
          />
        </Routes>
      </MainContainer>
    </HashRouter>
  );
}
