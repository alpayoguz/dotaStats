import React, { useEffect } from "react";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import Chart from "../Components/Chart";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Teams = () => {


  useEffect(() =>{
    document.title = "Dota 2 Teams Leaderboard";
  }, []);


  return (
    <HelmetProvider>
       <Helmet>
         <meta name="description" content="Dota 2 Teams. Leaderboard for Dota 2 Teams" />
       </Helmet>
    <Background>
      <Navbar/>
      <Chart/>
    </Background>
    </HelmetProvider>
   
  
  );
};

export default Teams;
