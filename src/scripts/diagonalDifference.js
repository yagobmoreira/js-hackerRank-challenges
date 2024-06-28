function diagonalDifference(arr) {
    const size = arr.length;
    let leftToRight = 0;
    let rightToLeft = 0;
    
    for (let i = 0; i < size; i += 1) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][size-i-1];
    }
    return Math.abs(leftToRight - rightToLeft);

}
