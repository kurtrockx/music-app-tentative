import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
import FavoritePage from "./pages/FavoritePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/song" element={<SongPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}
