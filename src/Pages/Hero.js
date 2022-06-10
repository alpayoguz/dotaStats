import { React } from "react";
import { useLocation, useParams } from "react-router-dom";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";


import HeroStatt from "../Components/HeroStats";

const HeroStat = () => {
  // hero ref
  const { heroname } = useParams();
  const location = useLocation();
  const currenthero = location.state;

  return (
    <>
      <Background>
        <Navbar />
        <HeroStatt currentHero={currenthero} />
      </Background>
    </>
  );
};

export default HeroStat;
