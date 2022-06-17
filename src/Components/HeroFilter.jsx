import React, { useRef, useState, useEffect } from "react";
import "../Css/herofilter.css";
import { attr_little_icons } from "../Constants/Attributes";
import SearchIcon from "@mui/icons-material/Search";
import { useHero } from "../Contexts/HeroesContext";

const HeroFilter = () => {
  const [strIcon, intIcon, agiIcon] = attr_little_icons;
  const { heroes, setHeroes, filteredHeroes, setFilteredHeroes } = useHero();
  const imagesRef = useRef([]);
  const [query, setQuery] = useState("");

  // filter heroes by primary attribute
  const filterHeroes = (priAttr, target) => {
    if (target.classList.contains("filter_active")) {
      removeActiveClasses();
      resetFilteredHeroes();
      return;
    }
    resetFilteredHeroes();
    removeActiveClasses();
    target.classList.add("filter_active");
    const filtered = heroes.filter((hero) => hero.primary_attr === priAttr);
    setFilteredHeroes(filtered);
  };
  // set filtered heroes  to all heroes for filtering again
  const resetFilteredHeroes = () => {
    setFilteredHeroes(heroes);
  };
  // remove all active classes before filter heroes
  const removeActiveClasses = () => {
    imagesRef.current.forEach((elem) => elem.classList.remove("filter_active"));
  };
  // query heroes with input value
  const queryHeroes = (target) => {};

  // query heroes with input value
  useEffect(() => {
    setFilteredHeroes(
      heroes?.filter((hero) => hero.localized_name.toLowerCase().includes(query))
    );
  }, [query]);


  return (
    <div className="filter_container">
      <p className="filter_header">Filter Heroes</p>
      <div className="filter_atts">
        <p className="filter_atts_title">Attributes</p>
        <div className="filter_atts_imgs">
          <img
            ref={(elem) => (imagesRef.current[0] = elem)}
            onClick={({ target }) => {
              filterHeroes("str", target);
            }}
            className="filter_atts_img"
            src={strIcon}
            alt={`agiIcon`}
          />
          <img
            ref={(elem) => (imagesRef.current[1] = elem)}
            onClick={({ target }) => {
              filterHeroes("agi", target);
            }}
            className="filter_atts_img"
            src={agiIcon}
            alt={`agiIcon`}
          />
          <img
            ref={(elem) => (imagesRef.current[2] = elem)}
            onClick={({ target }) => {
              filterHeroes("int", target);
            }}
            className="filter_atts_img"
            src={intIcon}
            alt={`intIcon`}
          />
        </div>
      </div>
      <div className="filter_input_container">
        <SearchIcon className="filter_input_icon" />
        <input
          type="text"
          value={query}
          onChange={({ target }) => {
            setQuery(target.value);
          }}
        />
      </div>
    </div>
  );
};

export default HeroFilter;
