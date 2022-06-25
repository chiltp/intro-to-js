function reverseString(str) {
  const strComponents = str.split('');
  let result = '';
  for (let i = strComponents.length - 1; i >= 0 ; i--) {
    result += strComponents[i];
  }
  return result;
}

reverseString("hello");