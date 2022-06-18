import React from "react";
import "../Css/Chart.css";
import { CSSTransition } from "react-transition-group";

const TeamMembers = ({ teamMems, isTeamMembersDisplayed }) => {
  console.log(isTeamMembersDisplayed);
  return (
    <ul
      className={`teammembers__list ${
        isTeamMembersDisplayed ? "teammembers-expand" : "teammembers-hidden"
      }`}
    >
      <li className="teammembers__item">Active Players </li>
      {teamMems.length > 0 ? (
        teamMems?.map((teamMember) => (
          <li className="teammembers__item">{teamMember.name}</li>
        ))
      ) : (
        <div className="empty__team">-No Active Players-</div>
      )}
    </ul>
  );
};

export default TeamMembers;
