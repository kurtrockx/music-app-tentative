import { useSearchParams } from "react-router-dom";
import Genre from "../components/Genre.jsx";
import SearchedSongs from "../components/SearchedSongs.jsx";

export default function SongPage({ accessToken }) {
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q") || "";

  if (q === "") return <Genre />;
  return <SearchedSongs accessToken={accessToken} query={q} />;
}
