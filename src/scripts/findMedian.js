
const findMedian = (arr) => {
  arr.sort((a,b) => a-b);
  const size = arr.length;
  let medium = 0,  median = 0;
  if (size % 2 === 0) {
    medium = size/2;
    median = (arr[medium-1] + arr[medium])/2;
  } else {
    medium = Math.floor(size/2);
    median = arr[medium]
  }
  return median;
}

console.log(findMedian([0,1,2,4,6,5,3]))