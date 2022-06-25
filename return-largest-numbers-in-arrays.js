function largestOfFour(arr) {
  let result = [];
  arr.forEach(e => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < e.length; i++) {
      if (max < e[i]) {
        max = e[i];
      }
    }
    result.push(max);
  })
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);