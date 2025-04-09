import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
import FavoritePage from "./pages/FavoritePage";
import { useEffect, useState } from "react";

const BASE_URL = "localhost:8000";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchSongs() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://${BASE_URL}/songs`);
        const data = await res.json();
        setSongs(data)
      } catch (err) {
        console.error("error: " + err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSongs();
  }, []);

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
