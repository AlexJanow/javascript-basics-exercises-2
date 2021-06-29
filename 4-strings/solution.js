function isEmptyString(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmptyString("")); // true
console.log(isEmptyString("some string")); // false

function isIncluded(a, b) {
  return a.includes(b);
}

console.log(isIncluded("bus", "us")); // true
console.log(isIncluded("house", "cat")); // false

function firstCharacter(str) {
  return str.charAt(0);
}

console.log(firstCharacter("house")); // "h"

function lastCharacter(str) {
  return str.slice(-1);
}

console.log(lastCharacter("house")); // "e"

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("house")); // House
