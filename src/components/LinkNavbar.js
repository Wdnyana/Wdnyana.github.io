import { useState } from "react";
import { NavLink } from "react-router-dom";

import { HamburgerIcon, CloseIcon } from "../assets/img";

const LinkNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        className="dropdown-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img className="closeMenu" src={CloseIcon} alt="Close" />
        ) : (
          <img className="openMenu" src={HamburgerIcon} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          HOME
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          ABOUT
        </NavLink>
        <NavLink to="/project" onClick={() => setIsMenuOpen(false)}>
          PROJECT
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          CONTACT
        </NavLink>
      </nav>
    </>
  );
};

export default LinkNavbar;
