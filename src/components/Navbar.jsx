import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/Navbar.module.css";
import Logo from "./Logo";
import NavSearchbar from "./NavSearchbar";
import TabLinks from "./TabLinks";
import SideBar from "./SideBar";
import burgerIcon from "../assets/burger.svg";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleSidebarToggle() {
    setSidebarOpen((curState) => !curState);
  }

  return (
    <nav
      className={`relative flex items-center justify-between py-4 ${styles.nav}`}
    >
      <button className={"lg:hidden"} onClick={handleSidebarToggle}>
        <img
          src={burgerIcon}
          alt="burger"
          className="aspect-square w-12 cursor-pointer rounded-full p-2 text-white hover:bg-white/20 active:bg-white/30"
        />
      </button>
      <SideBar
        bgClassName={`lg:hidden ${!sidebarOpen ? "hidden" : "block"}`}
        onClick={handleSidebarToggle}
      />
      <Link to="/" className="flex items-center gap-2 max-[480px]:hidden">
        <Logo height={52} />
        <h3 className="font-semibold text-white">Music App</h3>
      </Link>
      <TabLinks className={"max-lg:hidden"} />
      <NavSearchbar />
    </nav>
  );
}
