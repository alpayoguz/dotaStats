import { React, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Background from "../Components/Background";
import Navbar from "../Components/Navbar";
import PRIMARY_ATTR from "../Constants/Attributes";
import "../Css/herostat.css";
import imageBaseURL, { videoBaseURL } from "../Constants/imageBaseURL";
import { attr_images } from "../Constants/Attributes";
import allRoles from "../Constants/Roles";

const HeroStat = () => {
  // hero ref
  const { heroname } = useParams();
  const location = useLocation();
  const currenthero = location.state;
  const {
    primary_attr,
    name,
    localized_name,
    attack_type,
    attack_range,
    attack_rate,
    base_agi,
    base_armor,
    agi_gain,
    base_attack_max,
    base_attack_min,
    base_health,
    base_health_regen,
    base_int,
    base_mana,
    base_mana_regen,
    base_mr,
    base_str,
    int_gain,
    id,
    move_speed,
    str_gain,
    roles,
  } = currenthero;

  //  to glow single  hero roles
  const inputRef = useRef([]);
  function glowText() {
    inputRef.current.forEach((elem) => {
      if (roles.includes(elem.innerText)) {
        elem.classList.add("shadow_text");
      }
    });
  }
  useEffect(() => {
    glowText();
  }, []);

  // to reach video source
  const videoName = name.substring(14);

  // hero primary attribute
  function getPriAttr() {
    if (currenthero.primary_attr === "agi") {
      return PRIMARY_ATTR.find((elem) => elem.attr_name === "AGILITY");
    } else if (currenthero.primary_attr === "str") {
      return PRIMARY_ATTR.find((elem) => elem.attr_name === "STRENGTH");
    } else {
      return PRIMARY_ATTR.find((elem) => elem.attr_name === "INTELLIGENCE");
    }
  }



  return (
    <>
      <Background>
        <Navbar />
        <div className="herostat__main">
          <div className="herostat__left">
            <div className="herostat__header">
              <div className="header__primary">
                <img src={getPriAttr().attr_img} />
                <div>{getPriAttr().attr_name}</div>
              </div>
              <div className="header__name">{currenthero.localized_name}</div>
            </div>
            <div className="herostat_stats">
              <div className="herostats__stats__inner">
                <div className="stats__attributes">
                  <div className="stats__attributes__inner">
                    <div className="stats__attr__portrait">
                      <div className="attr__img__container">
                        <img
                          className="attr__img"
                          src={`${imageBaseURL}${currenthero.img}`}
                        />
                      </div>
                      <div className="portrait__healthbar">
                        <div className="healthbar_health">
                          {base_health + base_str * 20}
                        </div>
                        <div className="healthbar_regen">
                          +{(base_health_regen + base_str * 0.1).toFixed(1)}
                        </div>
                      </div>
                      <div className="portrait__manabar">
                        <div className="manabar_mana">
                          {" "}
                          {base_mana + base_int * 12}
                        </div>
                        <div className="manabar_regen">
                          {(base_mana_regen + base_int * 0.05).toFixed(1)}
                        </div>
                      </div>
                    </div>
                    <div className="attr__nums">
                      <div className="attr__nums__str">
                        <img className="attr_icon" src={attr_images[0]} />
                        <div className="attr_nums_base">{base_str}</div>
                        <div className="attr_nums_inc">
                          +{str_gain.toFixed(1)}
                        </div>
                      </div>
                      <div className="attr__nums__str">
                        <img className="attr_icon" src={attr_images[1]} />
                        <div className="attr_nums_base">{base_agi}</div>
                        <div className="attr_nums_inc">
                          +{agi_gain.toFixed(1)}
                        </div>
                      </div>
                      <div className="attr__nums__str">
                        <img className="attr_icon" src={attr_images[2]} />
                        <div className="attr_nums_base">{base_int}</div>
                        <div className="attr_nums_inc">
                          +{int_gain.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="attr__name">ATTRIBUTES</div>
                </div>

                <div className="stats__roles">
                  {allRoles.map((element, index) => {
                    return (
                      <div
                        key={index}
                        ref={(elem) => (inputRef.current[index] = elem)}
                        className={`roles__role`}
                      >
                        {element}
                      </div>
                    );
                  })}
                </div>
                <div className="stats__pros">
                  <div className="pros__element">
                    <div className="element_title">ATTACK</div>
                    <div className="element_val">50</div>
                    <div className="element_val">1.5</div>
                    <div className="element_val">150</div>
                  </div>
                  <div className="pros__element">
                    <div className="element_title">DEFENSE</div>
                    <div className="element_val">5</div>
                    <div className="element_val">%25</div>
                  </div>
                  <div className="pros__element">
                    <div className="element_title">MOBILITY</div>
                    <div className="element_val">300</div>
                    <div className="element_val">1800 / 800</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="herostat__right">
            <div className="herostat__video">
              <video
                className="herostat__video_content"
                autoPlay
                loop
                playsInline
                preload="auto"
              >
                <source
                  type="video/webm"
                  src={`${videoBaseURL}${videoName}.webm`}
                />
              </video>
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};

export default HeroStat;
