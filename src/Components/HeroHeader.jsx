import React from "react";
import PRIMARY_ATTR from "../Constants/Attributes";
import "../Css/heroheader.css"

  // hero primary attribute
const HeroHeader = ({localized_name, primary_attr}) => {
  function getPriAttr() {
    if (primary_attr === "agi") {
      return PRIMARY_ATTR.find((elem) => elem.attr_name === "AGILITY");
    } else if (primary_attr === "str") {
      return PRIMARY_ATTR.find((elem) => elem.attr_name === "STRENGTH");
    } else {
      return PRIMARY_ATTR.find((elem) => elem.attr_name === "INTELLIGENCE");
    }
  }
  return (
    <div className="header_container">
      <div className="header__primary">
        <img src={getPriAttr().attr_img} />
        <div>{getPriAttr().attr_name}</div>
      </div>
      <div className="header__name">{localized_name}</div>
    </div>
  );
};

export default HeroHeader;
