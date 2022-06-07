import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import "../Css/heroes.css";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Header from "../Components/Header";
import { useHero } from "../Contexts/HeroesContext";

const Heroes = () => {
  const { heroes, setHeroes } = useHero();

  useEffect(() => {
    axios.get("https://api.opendota.com/api/heroStats").then((response) => {
      setHeroes(response.data);
    });
  }, []);
  return (
    <>
      <Background>
        <Navbar />
        <div class="">
          <div className="page__container">
            <Header text="Pick Your Hero" cls="heroes__header" />
            <div>Arama Cubugu</div>
            <div className="heroes__container">
              {heroes?.map((hero) => {
                return (
                  <>
                    <Hero
                      key={hero.id}
                      heroId={hero.id}
                      heroImg={hero.img}
                      heroName={hero.localized_name}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};

export default Heroes;
