import React from "react";
import "../Css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__content">
        <a className="logo_img"></a>
        <ul className="navbar__items">
          <li>
            <Link className="navbar__item" to={`/`}>
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link className="navbar__item" to={`/heroes`}>
              HEROES
            </Link>
          </li>
          <li>
            <Link className="navbar__item" to={`/heroes`}>
              SEARCH PLAYER
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
