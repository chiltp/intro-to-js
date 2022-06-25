function titleCase(str) {
  return str.split(' ').map(e => `${e[0].toUpperCase()}${e.substring(1, e.length).toLowerCase()}`).join(' ')
}

titleCase("I'm a little tea pot");