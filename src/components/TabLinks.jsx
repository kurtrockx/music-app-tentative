import { NavLink } from "react-router-dom";

export default function TabLinks({className = ''}) {
  return (
      <ul className={`center absolute flex divide-x divide-white overflow-hidden rounded-full border border-white ${className}`}>
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
  );
}
