function frankenSplice(arr1, arr2, n) {
  let cloneArr2 = [...arr2]
  cloneArr2.splice(n, 0 , ...arr1);
  return cloneArr2;
}

frankenSplice([1, 2, 3], [4, 5], 1);