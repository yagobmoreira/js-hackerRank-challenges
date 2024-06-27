const miniMaxSum = (arr) => {
  arr.sort((a,b) => a - b);
  const min = arr.slice(0,4).reduce((curr, acc) => curr + acc, 0)
  const max = arr.slice(1).reduce((curr, acc) => curr + acc, 0)
  return `${min} ${max}`
}
miniMaxSum([1,3,5,7,9])

module.exports = miniMaxSum;