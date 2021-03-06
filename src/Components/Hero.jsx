// react and react-router library
import React from "react";
import { Link } from "react-router-dom";
//context
import { useHero } from "../Contexts/HeroesContext";
// css
import "../Css/hero.css";
// constants
import imageBaseURL from "../Constants/imageBaseURL";

const Hero = ({ heroImg, heroName, heroId }) => {
  const { heroes } = useHero();
  const currentHero = heroes.find((hero) => hero.id === heroId);
  const currentHeroName = currentHero.localized_name
    .toLowerCase()
    .replace(/ /g, "");

  return (
    <Link className="hero_link" to={`../hero/${currentHeroName}`} state={currentHero}>
      <div className="img__container">
        <img
          className="hero__img"
          src={`${imageBaseURL}${heroImg}`}
          alt={heroName}
        />
      </div>
    </Link>
  );
};

export default Hero;
