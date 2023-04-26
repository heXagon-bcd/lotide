//function that prints an appropriate message after comparing the two arrays.
const assertArraysEqual = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return `These two arrays are a perfect match!`;
  } else {
    return 'These two arrays are not a match';
  }
};

module.exports = assertArraysEqual;