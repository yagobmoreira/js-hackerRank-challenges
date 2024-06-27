const catAndMouse = (x,y,z) => {
  if (Math.abs(x-z) > Math.abs(y-z)) {
    return 'Cat B';
  } else if (Math.abs(x-z) === Math.abs(y-z)) {
    return 'Mouse C';
  }
  return 'Cat A';
}

catAndMouse(1,3,2)

module.exports = catAndMouse;