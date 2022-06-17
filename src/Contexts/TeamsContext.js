import { Children, createContext, useContext, useState, } from "react";



const TeamContext = createContext();
const useTeams = () => {
  return useContext(TeamContext);
};

const TeamProvider = ({ children }) => {
  const [teams, setTeams] = useState();

  const value = {
    teams,
    setTeams,
  };

  return (
    <>
      <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
    </>
  );
};

export { TeamProvider,  useTeams };
