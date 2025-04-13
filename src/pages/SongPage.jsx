import { useSearchParams } from "react-router-dom";
import SearchedSongs from "../components/SearchedSongs.jsx";
import Message from "../components/Message.jsx";

export default function SongPage({ accessToken, onAddFav, favorites }) {
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q") || "";

  return !q ? (
    <Message message={"Search for a song 🔍"} />
  ) : (
    <SearchedSongs
      accessToken={accessToken}
      query={q}
      onAddFav={onAddFav}
      favorites={favorites}
    />
  );
}
