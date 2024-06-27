const formingMagicSquare = (s) => {
  const magicSquares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
  ];

  let minCost = Infinity;

  for (const magic of magicSquares) {
    let cost = 0;
    for (let i = 0; i < 9; i += 1) {
      cost += Math.abs(s.flat()[i] - magic[i]);
    }
    if (cost < minCost) {
      minCost = cost;
    }
  }
  return minCost;
}

// console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
module.exports = formingMagicSquare;