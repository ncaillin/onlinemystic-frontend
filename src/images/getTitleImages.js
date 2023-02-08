const world_reversed = require('./reversed/world.png')

const images = {
  world_reversed,
}

const getTitleImage = (name) => { 
  return images[name]
}

export { getTitleImage }