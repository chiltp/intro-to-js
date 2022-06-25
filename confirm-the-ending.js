function confirmEnding(str, target) {
  // console.log(str.lastIndexOf(target));
  if (str.lastIndexOf(target) === (str.length - target.length)) {
    return true
  }
  return false;
}

confirmEnding("Congratulation", "on");