import { useNavigate, useSearchParams } from "react-router-dom";
import searchIcon from "../assets/searchIcon.svg";
import { useState } from "react";

export default function NavSearchbar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  function handleClick() {
    if (q) return;
    navigate("/search");
  }

  function handleChange(e) {
    const { value } = e.target;
    setSearchParams({ q: value }, { replace: true });
  }

  return (
    <div className="flex items-center gap-2 rounded-sm border border-white px-2 py-2 duration-200 focus-within:bg-white/4 hover:bg-white/4">
      <input
        type="text"
        className="w-32 px-px text-white outline-0 duration-200 focus:w-48"
        placeholder="Search"
        value={q}
        onChange={handleChange}
        onClick={handleClick}
      />
      <button>
        <img
          src={searchIcon}
          alt="search-icon"
          className="h-6 cursor-pointer"
        />
      </button>
    </div>
  );
}
