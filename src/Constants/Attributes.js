import agiImg from "../Statics/hero_attr_imgs/hero_agility.png"
import strImg from "../Statics/hero_attr_imgs/hero_strength.png"
import intImg from "../Statics/hero_attr_imgs/hero_intelligence.png"
import icon_armor from "../Statics/hero_pros_imgs/icon_armor.png"
import icon_attack_range from "../Statics/hero_pros_imgs/icon_attack_range.png"
import icon_attack_time from "../Statics/hero_pros_imgs/icon_attack_time.png"
import icon_damage from "../Statics/hero_pros_imgs/icon_damage.png"
import icon_magic_resist from "../Statics/hero_pros_imgs/icon_magic_resist.png"
import icon_movement_speed from "../Statics/hero_pros_imgs/icon_movement_speed.png"
import icon_projectile_speed from "../Statics/hero_pros_imgs/icon_projectile_speed.png"
import icon_vision from "../Statics/hero_pros_imgs/icon_vision.png"
import attrIconStr from "../Statics/hero_attr_icons/filter-str-active.png"
import attrIconAgi from "../Statics/hero_attr_icons/filter-agi-active.png"
import attrIconInt from "../Statics/hero_attr_icons/filter-int-active.png"











const PRIMARY_ATTR = [
    {
        attr_img:agiImg,
        attr_name:"AGILITY"
    },
    {
        attr_img:intImg,
        attr_name:"INTELLIGENCE"
    },
    {
        attr_img:strImg,
        attr_name:"STRENGTH"
    }
]
export const attr_little_icons = [
    attrIconStr,
    attrIconInt,
    attrIconAgi
]


export const pros_icons = {
    icon_armor:icon_armor,
    icon_attack_range:icon_attack_range,
    icon_attack_time:icon_attack_time,
    icon_damage:icon_damage,
    icon_magic_resist:icon_magic_resist,
    icon_movement_speed:icon_movement_speed,
    icon_projectile_speed:icon_projectile_speed,
    icon_vision:icon_vision,
}

export const attr_images = [strImg, agiImg, intImg]

export default PRIMARY_ATTR