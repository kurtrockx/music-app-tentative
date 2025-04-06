import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import { useEffect } from "react";
import ArtistPage from "./pages/ArtistPage";
import SongPage from "./pages/SongPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/song" element={<SongPage />} />
        <Route path="/artist" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}
