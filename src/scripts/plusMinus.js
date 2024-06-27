const plusMinus = (arr) => {
  const size = arr.length;
  let negatives = 0, zeros = 0, positives = 0;
  for (const number of arr) {
    if (number < 0) {
      negatives += 1;
    } else if (number === 0) {
      zeros += 1;
    } else {
      positives += 1;
    }
  }
  console.log(`${(positives/size).toFixed(6)}\n${(negatives/size).toFixed(6)}\n${(zeros/size).toFixed(6)}`);
}

module.exports = plusMinus;