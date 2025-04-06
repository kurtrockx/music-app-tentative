import { Link, NavLink } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav
      className={`relative flex items-center justify-between py-4 ${styles.nav}`}
    >
      <Link to="/" className="flex items-center gap-2">
        <Logo height={52} />
        <h3 className="font-semibold text-white">Music App</h3>
      </Link>
      <ul className="center absolute flex divide-x divide-white overflow-hidden rounded-full border border-white">
        <li>
          <NavLink
            to="/song"
            className="block px-6 py-2 text-sm font-semibold text-white"
          >
            SONG
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/artist"
            className="block px-6 py-2 text-sm font-semibold text-white"
          >
            ARTIST
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className="block px-6 py-2 text-sm font-semibold text-white"
          >
            FAVORITE
          </NavLink>
        </li>
      </ul>
      <Searchbar />
    </nav>
  );
}
