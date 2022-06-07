import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const HeroContext = createContext();
export const useHero = () =>{
    return useContext(HeroContext)
}

export const HeroProvider = ({children}) =>{
    const [heroes, setHeroes] = useState();
    useEffect(()=>{
        axios.get("https://api.opendota.com/api/heroes")
        .then(response=>{
            setHeroes(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    const value = {
        heroes,
        setHeroes
    }

    return(
        <>
        <HeroContext.Provider value={value}>{children}</HeroContext.Provider>
        </>
    )
}