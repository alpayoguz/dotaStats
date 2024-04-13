// react library
import React, { useEffect, useState } from "react";
// css
import "../Css/heroes.css";
// axios
import axios from "axios";
//components
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Header from "../Components/Header";
import HeroFilter from "../Components/HeroFilter";
// context
import { useHero } from "../Contexts/HeroesContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Opacity } from "@mui/icons-material";






const Heroes = () => {
  const { heroes, setHeroes, filteredHeroes, setFilteredHeroes, deneme } =
    useHero();
    const options = {game_mode: 1}
  // fetch from api
  useEffect(() => {
    document.title = "Dota 2 Heroes";
    axios
      .get("https://api.opendota.com/api/heroStats")
      .then((response) => {
        setFilteredHeroes(response.data);
        setHeroes(response.data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <HelmetProvider>
      <Helmet>
        <meta name="description" content="Dota 2 Heroes"></meta>
      </Helmet>
      <Background>
        <Navbar />
        <div>
          <div className="page__container">
            <h1 style={{opacity:0}}>Dota 2 Heroes</h1>
            <Header text="Pick Your Hero" cls="heroes__header" />
            <HeroFilter />
            <div className="heroes__container">
              {filteredHeroes?.map((hero) => {
                return (
                  <Hero
                    key={hero.id}
                    heroId={hero.id}
                    heroImg={hero.img}
                    heroName={hero.localized_name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Background>
      </HelmetProvider> 
    </>
  );
};

export default Heroes;
