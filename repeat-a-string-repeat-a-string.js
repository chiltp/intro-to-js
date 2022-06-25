function repeatStringNumTimes(string, times) {
  let repeatedString = '';
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);