import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/HomePage";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
import FavoritePage from "./pages/FavoritePage";
import useSpotifyToken from "./hooks/useSpotifyToken";
import NewReleasesPage from "./pages/NewReleasesPage";
import MainContainer from "./components/layout/MainContainer";
import Navbar from "./components/Navbar";

const clientId = "fc11c6d55eee4959a8ce90156b0e90ae";
const clientSecret = "e7d5a5b1d4ed455c933c9522e4782d77";
const base64Credentials = btoa(`${clientId}:${clientSecret}`);

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = useSpotifyToken(base64Credentials);

  return (
    <BrowserRouter>
      <MainContainer>
        <Navbar />
        <Routes>
          <Route index element={<Homepage isLoading={isLoading} />} />
          <Route
            path="/newRelease"
            element={<NewReleasesPage accessToken={accessToken} />}
          />
          <Route
            path="/search"
            element={<SongPage accessToken={accessToken} />}
          />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}
