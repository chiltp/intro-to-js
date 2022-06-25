function findLongestWordLength(str) {
  let maxLength = Number.MIN_SAFE_INTEGER;
  str.split(' ').forEach(e => {
    if (maxLength < e.length){
      maxLength = e.length;
    } 
  });
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");