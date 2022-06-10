import React from "react";
import "../Css/herofilter.css";
import { attr_little_icons } from "../Constants/Attributes";
import SearchIcon from '@mui/icons-material/Search';

const HeroFilter = () => {
  const [strIcon, intIcon, agiIcon] = attr_little_icons;

  return (
    <div className="filter_container">
      <p className="filter_header">Filter Heroes</p>
      <div className="filter_atts">
        <p className="filter_atts_title">Attributes</p>
        <div className="filter_atts_imgs">
          <img className="filter_atts_img" src={strIcon} alt={`agiIcon`} />
          <img className="filter_atts_img" src={agiIcon} alt={`agiIcon`} />
          <img className="filter_atts_img" src={intIcon} alt={`intIcon`} />
        </div>
      </div>
      <div className="filter_input_container">
        <SearchIcon className="filter_input_icon"/>
        <input type="text" />
      </div>
    </div>
  );
};

export default HeroFilter;
