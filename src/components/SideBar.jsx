import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function SideBar({
  bgClassName = "",
  sideClassName = "",
  onClick,
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-2 min-h-dvh w-dvw bg-black/50 ${bgClassName}`}
    >
      <ul
        className={`fixed flex h-full w-96 max-w-full flex-col gap-2 bg-black/90 p-2 duration-200 starting:-translate-x-full ${sideClassName} `}
      >
        <button
          onClick={onClick}
          className={
            "ml-auto aspect-square cursor-pointer rounded-full text-4xl text-white hover:bg-white/20 active:bg-white/30"
          }
        >
          &times;
        </button>
        <li>
          <NavLink
            to="/"
            className="block px-6 py-2 text-sm font-semibold text-white hover:bg-white/4"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newRelease"
            className="block px-6 py-2 text-sm font-semibold text-white hover:bg-white/4"
          >
            NEW RELEASES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className="block px-6 py-2 text-sm font-semibold text-white hover:bg-white/4"
          >
            BROWSE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className="block px-6 py-2 text-sm font-semibold text-white hover:bg-white/4"
          >
            FAVORITE
          </NavLink>
        </li>
      </ul>
      <div className="h-dvh w-full" onClick={onClick}></div>
    </div>
  );
}
