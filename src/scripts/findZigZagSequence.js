const findZigZagSequence = (input) => {
  const [inputData] = input.split("\n").slice(2)
  const arr = inputData.split(' ').map(Number);
  k = (arr.length + 1) / 2;
  arr.sort((a,b) => a - b);
  const increasingOrder = arr.slice(0,k - 1);
  const decresingOrder = arr.slice(k-1).reverse();
  const result = increasingOrder.concat(decresingOrder).join(" ");
  
  console.log(result)

}

module.exports = findZigZagSequence;q