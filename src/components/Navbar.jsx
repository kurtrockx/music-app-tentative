import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <ul className="flex">
        <li>
          <NavLink to="/song">Songs</NavLink>
        </li>
        <li>
          <NavLink to="/artist">Artist</NavLink>
        </li>
      </ul>
      <Searchbar />
    </nav>
  );
}
