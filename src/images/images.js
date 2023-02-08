const chariot = require('./normal/chariot.png')
const death = require('./normal/death.png')
const devil = require('./normal/devil.png')
const emperor = require('./normal/emperor.png')
const empress = require('./normal/empress.png')
const fool = require('./normal/fool.png')
const hanged_man = require('./normal/hanged_man.png')
const hermit = require('./normal/hermit.png')
const hierophant = require('./normal/hierophant.png')
const high_priestess = require('./normal/high_priestess.png')
const judgement = require('./normal/judgement.png')
const justice = require('./normal/justice.png')
const lovers = require('./normal/lovers.png')
const magician = require('./normal/magician.png')
const moon = require('./normal/moon.png')
const star = require('./normal/star.png')
const strength = require('./normal/strength.png')
const sun = require('./normal/sun.png')
const temperance = require('./normal/temperance.png')
const tower = require('./normal/tower.png')
const wheel_of_fortune = require('./normal/wheel_of_fortune.png')
const world = require('./normal/world.png')

const chariot_reversed = require('./reversed/chariot.png')
const death_reversed = require('./reversed/death.png')
const devil_reversed = require('./reversed/devil.png')
const emperor_reversed = require('./reversed/emperor.png')
const empress_reversed = require('./reversed/empress.png')
const fool_reversed = require('./reversed/fool.png')
const hanged_man_reversed = require('./reversed/hanged_man.png')
const hermit_reversed = require('./reversed/hermit.png')
const hierophant_reversed = require('./reversed/hierophant.png')
const high_priestess_reversed = require('./reversed/high_priestess.png')
const judgement_reversed = require('./reversed/judgement.png')
const justice_reversed = require('./reversed/justice.png')
const lovers_reversed = require('./reversed/lovers.png')
const magician_reversed = require('./reversed/magician.png')
const moon_reversed = require('./reversed/moon.png')
const star_reversed = require('./reversed/star.png')
const strength_reversed = require('./reversed/strength.png')
const sun_reversed = require('./reversed/sun.png')
const temperance_reversed = require('./reversed/temperance.png')
const tower_reversed = require('./reversed/tower.png')
const wheel_of_fortune_reversed = require('./reversed/wheel_of_fortune.png')
const world_reversed = require('./reversed/world.png')


const images = {
  normal: {
    chariot,
    death,
    devil,
    emperor,
    empress,
    fool,
    hanged_man,
    hermit,
    hierophant,
    high_priestess,
    judgement,
    justice,
    lovers,
    magician,
    moon,
    star,
    strength,
    sun,
    temperance,
    tower,
    wheel_of_fortune,
    world,
  },
  reversed: {
    chariot:  chariot_reversed,
    death:  death_reversed,
    devil:  devil_reversed,
    emperor:  emperor_reversed,
    empress:  empress_reversed,
    fool:  fool_reversed,
    hanged_man:  hanged_man_reversed,
    hermit:  hermit_reversed,
    hierophant:  hierophant_reversed,
    high_priestess:  high_priestess_reversed,
    judgement:  judgement_reversed,
    justice:  justice_reversed,
    lovers:  lovers_reversed,
    magician:  magician_reversed,
    moon:  moon_reversed,
    star:  star_reversed,
    strength:  strength_reversed,
    sun:  sun_reversed,
    temperance:  temperance_reversed,
    tower:  tower_reversed,
    wheel_of_fortune:  wheel_of_fortune_reversed,
    world:  world_reversed,
  }
}

const getImage = (name, reversed) => {
  if (reversed) {
    return images.reversed[name]
  }
  return images.normal[name]
}

export { getImage }