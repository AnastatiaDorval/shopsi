import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Redirect } from "react-router-dom";
import Logout from "../Logout/Logout";
import logo from "./logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <div className="navheader">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className={"nav-menu"}>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="how-to"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              How To
            </Link>
          </li>
          <li className="nav-item">
            <Redirect to="/sign-up" onClick={closeMenu}>
              Get Started
            </Redirect>
          </li>
          <li className="nav-item">
            <Redirect to="/login" onClick={closeMenu}>
              Login
            </Redirect>
          </li>
          <li className="nav-item">
            <Logout />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
