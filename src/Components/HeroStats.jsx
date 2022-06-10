//  react library hooks
import React, { useRef, useEffect } from "react";
//  component
import HeroHeader from "./HeroHeader";
//  for images and icons
import imageBaseURL, { videoBaseURL } from "../Constants/imageBaseURL";
import { attr_images } from "../Constants/Attributes";
// for  static hero roles and attributes
import allRoles from "../Constants/Roles";
import { pros_icons } from "../Constants/Attributes";
// css
import "../Css/herostat.css";


const HeroStatt = ({ currentHero }) => {
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
    img,
  } = currentHero;
  console.log(currentHero);

  const {
    icon_armor,
    icon_attack_range,
    icon_attack_time,
    icon_damage,
    icon_magic_resist,
    icon_movement_speed,
    icon_projectile_speed,
    icon_vision,
  } = pros_icons;
  console.log(icon_vision);
  
  
  const videoName = name.substring(14);
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

  return (
    <div className="herostat__main">
      <div className="herostat__left">
        <HeroHeader
          localized_name={localized_name}
          primary_attr={primary_attr}
        />
        <div className="herostat_stats">
          <div className="herostats__stats__inner">
            <div className="stats__attributes">
              <div className="stats__attributes__inner">
                <div className="stats__attr__portrait">
                  <div className="attr__img__container">
                    <img className="attr__img" src={`${imageBaseURL}${img}`} />
                  </div>
                  <div className="portrait_bar">
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
                      +{(base_mana_regen + base_int * 0.05).toFixed(1)}
                    </div>
                  </div>
                </div>
                <div className="attr__nums">
                  <div className="attr__nums__str">
                    <img className="attr_icon" src={attr_images[0]} />
                    <div className="attr_nums_base">{base_str}</div>
                    <div className="attr_nums_inc">+{str_gain.toFixed(1)}</div>
                  </div>
                  <div className="attr__nums__str">
                    <img className="attr_icon" src={attr_images[1]} />
                    <div className="attr_nums_base">{base_agi}</div>
                    <div className="attr_nums_inc">+{agi_gain.toFixed(1)}</div>
                  </div>
                  <div className="attr__nums__str">
                    <img className="attr_icon" src={attr_images[2]} />
                    <div className="attr_nums_base">{base_int}</div>
                    <div className="attr_nums_inc">+{int_gain.toFixed(1)}</div>
                  </div>
                </div>
              </div>
              <div className="attr__name">ATTRIBUTES</div>
              <hr className="horizontal__seperator1" />
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
              <div className="attr__name">ROLES</div>
              <hr className="horizontal__seperator2" />
            </div>

            <div className="stats__pros">
              <div className="stats__pros__inner">
                <div className="pros__element">
                  <div className="element_title">ATTACK</div>
                  <div className="element_val">
                    <div className="pros_icon_container">
                      <img className="pros_icon" src={icon_armor}/>
                    </div>
                
                    {base_attack_min}-{base_attack_max}
                  </div>
                  <div className="element_val">
                     <div className="pros_icon_container">
                      <img className="pros_icon" src={icon_attack_time}/>
                    </div>
                    {attack_rate}
                    </div>
                  <div className="element_val">
                  <div className="pros_icon_container">
                      <img className="pros_icon" src={icon_attack_range}/>
                    </div>
                    {attack_range}</div>
                </div>
                <div className="pros__element">
                  <div className="element_title">DEFENSE</div>
                  <div className="element_val">
                  <div className="pros_icon_container">
                      <img className="pros_icon" src={icon_armor}/>
                    </div>
                    {(base_armor + base_agi * 0.167).toFixed(1)}</div>
                  <div className="element_val">
                  <div className="pros_icon_container">
                      <img className="pros_icon" src={icon_magic_resist}/>
                    </div>
                    {base_mr}</div>
                </div>
                <div className="pros__element">
                  <div className="element_title">MOBILITY</div>
                  <div className="element_val">
                  <div className="pros_icon_container">
                      <img className="pros_icon" src={icon_movement_speed}/>
                    </div>
                    {move_speed}</div>
                  <div className="element_val">
                  <div className="pros_icon_container">
                      <img className="pros_icon" src={icon_vision}/>
                    </div>
                    1800 / 800</div>
                </div>
              </div>
              <div className="attr__name">ATTRIBUTES</div>
            </div>
          </div>
        </div>
      </div>
      <div className="herostat__video_container">
        <video
          className="herostat__video_content"
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          <source type="video/webm" src={`${videoBaseURL}${videoName}.webm`} />
        </video>
      </div>
    </div>
  );
};

export default HeroStatt;
