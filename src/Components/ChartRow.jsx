import React, { useState, useEffect } from "react";
import "../Css/Chart.css";
import { teamsBaseURL } from "../Constants/imageBaseURL";
import TeamMembers from "./TeamMembers";
import { CSSTransition } from "react-transition-group";

import axios from "axios";

const ChartRow = ({ team, index }) => {
  const [isTeamMembersDisplayed, setIsTeamMembersDisplayed] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    axios
      .get(`${teamsBaseURL}/${team.team_id}/players`)
      .then((response) => {
        const isActiveMember = response.data.filter(
          (member) => member.is_current_team_member
        );
        return isActiveMember;
      })
      .then((isAM) => setTeamMembers(isAM));
  }, []);

  return (
    <CSSTransition
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <li
        key={index}
        className="chart__listItem"
        onClick={() => {
          setIsTeamMembersDisplayed(!isTeamMembersDisplayed);
        }}
      >
        <span className="chart__span">{index + 1}</span>
        <img className="chart__icon" src={team.logo_url} />
        <span className="chart__span"> {team.name}</span>
        <span className="chart__span chart__rating">
          {team.rating.toFixed()}
        </span>

        <TeamMembers
          key={index}
          teamMems={teamMembers}
          isTeamMembersDisplayed={isTeamMembersDisplayed}
        />
      </li>
    </CSSTransition>
  );
};

export default ChartRow;
