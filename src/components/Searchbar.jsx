export default function Searchbar() {
  return (
    <div className="flex items-center gap-2 rounded-sm border border-white px-2 py-2">
      <input
        type="text"
        className="w-32 px-px text-white outline-0 duration-200 focus:w-48"
        placeholder="Search"
      />
      <img
        src="searchIcon.svg"
        alt="search-icon"
        className="h-6 cursor-pointer"
      />
    </div>
  );
}
