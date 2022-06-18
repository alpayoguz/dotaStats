import React from "react";
import "../Css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__content">
        <Link to={`/`} className="logo_img"></Link>
        <ul className="navbar__items">
          <li className="navbar__item">
            {" "}
            <Link className="navbar__link" to={`/`}>
              HEROES
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to={`/teams`}>
              TEAMS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
