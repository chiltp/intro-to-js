function getIndexToIns(arr, num) {
  return arr.filter(e => num > e).length;
}

getIndexToIns([40, 60], 50);