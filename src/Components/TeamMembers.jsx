import React, { useState, useEffect } from "react";
import { teamsBaseURL } from "../Constants/imageBaseURL";
import axios from "axios";
import "../Css/Chart.css";

const TeamMembers = ({teamMems}) => {
  const [teamMembers, setTeamMembers] = useState();


  return (
    <ul className="teammembers__list">
        <li className="teammembers__item">Active Players </li>
      {teamMems.length > 0 ? teamMems?.map((teamMember) => (
        <li className="teammembers__item">{teamMember.name}</li>
      )) : <div className="empty__team">-No Active Players-</div>}
    </ul>
  );
};

export default TeamMembers;
