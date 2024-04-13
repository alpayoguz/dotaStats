import { React } from "react";
import { useLocation, useParams } from "react-router-dom";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";


import HeroStatt from "../Components/HeroStats";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HeroStat = () => {
  // hero ref
  const { heroname } = useParams();
  const normalizedHeroName = heroname.capitalize();
  const location = useLocation();
  const currenthero = location.state;
  return (
    <>
    <HelmetProvider>
    <Helmet>
      <title>{ 'Dota 2 - ' + normalizedHeroName }</title>
      <meta name="description" content={'Hero statistics for Dota 2 hero ' + normalizedHeroName} />
    </Helmet>
    <Background>
        <Navbar />
        <HeroStatt currentHero={currenthero} />
      </Background>
    </HelmetProvider>
      
    
    </>
  );
};

export default HeroStat;
