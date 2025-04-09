import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./pages/HomePage";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
import FavoritePage from "./pages/FavoritePage";
import useSpotifyToken from "./hooks/useSpotifyToken";

const clientId = "fc11c6d55eee4959a8ce90156b0e90ae";
const clientSecret = "e7d5a5b1d4ed455c933c9522e4782d77";
const base64Credentials = btoa(`${clientId}:${clientSecret}`);

export default function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = useSpotifyToken(base64Credentials);

  useEffect(() => {
    if (!accessToken) return;
    fetch("https://api.spotify.com/v1/search?q=miles+morales&type=track", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.tracks.items);
        setSongs(data.tracks.items);
      })
      .catch((error) => console.error("Error:", error));
  }, [accessToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage isLoading={isLoading} />} />
        <Route path="/song" element={<SongPage songs={songs} />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}
