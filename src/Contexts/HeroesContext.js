import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const HeroContext = createContext();
export const useHero = () =>{
    return useContext(HeroContext)
}

export const HeroProvider = ({children}) =>{
    const [heroes, setHeroes] = useState();
    const[filteredHeroes, setFilteredHeroes] = useState() ;


    const value = {
        heroes,
        setHeroes,
        filteredHeroes,
        setFilteredHeroes,   
    }

    return(
        <>
        <HeroContext.Provider value={value}>{children}</HeroContext.Provider>
        </>
    )
}