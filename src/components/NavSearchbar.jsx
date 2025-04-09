import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/searchIcon.svg";
import { useState } from "react";

export default function NavSearchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleQuery(e) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      navigate("/newRelease");
      return;
    }
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    if (query === "") return;
    navigate(`/search/${query}`);
  }

  return (
    <form
      onSubmit={handleFormSubmission}
      className="flex items-center gap-2 rounded-sm border border-white px-2 py-2 duration-200 focus-within:bg-white/4 hover:bg-white/4"
    >
      <input
        type="text"
        className="w-32 px-px text-white outline-0 duration-200 focus:w-48"
        placeholder="Search"
        onChange={handleQuery}
      />
      <button>
        <img
          src={searchIcon}
          alt="search-icon"
          className="h-6 cursor-pointer"
        />
      </button>
    </form>
  );
}
