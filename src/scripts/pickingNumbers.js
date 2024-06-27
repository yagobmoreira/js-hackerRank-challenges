const pickingNumbers = (a) => {
  const mapNumbers = {};
  for (const number of a) {
    if (!mapNumbers[number]) {
      mapNumbers[number] = 1
    } else {
      mapNumbers[number] += 1
    }
  }
  const data = Object.entries(mapNumbers);
  let longest = 0;

  for (const [_, count] of data) {
    if (count > longest) {
      longest = count;
    }
  }

  for (let i = 0; i < data.length - 1; i += 1) {
    let cost = 0;
    if (Math.abs(Number(data[i][0]) - Number(data[i+1][0])) <= 1) {
      cost = data[i][1] + data[i+1][1]
    }
    if (cost > longest) {
      longest = cost;
    }
  }
  return longest;
}

module.exports = pickingNumbers;