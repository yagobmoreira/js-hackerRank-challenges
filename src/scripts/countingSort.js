function countingSort(arr) {
   let result = Array(100).fill(0);
   for (const number of arr) {
       result[number] += 1;
   }
   return result;

}
