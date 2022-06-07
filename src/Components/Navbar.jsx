import React from "react";
import "../Css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__content">
        <a className="logo_img"></a>
        <ul className="navbar__items">
          <li className="navbar__item">HOME</li>
          <Link to={`/heroes`}>
            <li className="navbar__item">HEROES</li>
          </Link>

          <li className="navbar__item">SEARCH PLAYER</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
