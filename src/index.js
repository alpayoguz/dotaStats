import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
import App from "./App";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { HeroProvider } from "./Contexts/HeroesContext";
import Heroes from "./Pages/Heroes";
import Hero from "./Pages/Hero";
import Teams from "./Pages/Teams";
import { TeamProvider } from "./Contexts/TeamsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TeamProvider>   
      <HeroProvider>
        <Routes>
         
          <Route path="" element={<Heroes />} />
          <Route path="teams" element={<Teams />} />
          <Route path="/hero/:heroname" element={<Hero />} />
        </Routes>
      </HeroProvider>
    </TeamProvider>
  </BrowserRouter>
);
