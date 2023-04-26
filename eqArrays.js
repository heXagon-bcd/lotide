//function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
const eqArrays = function(str1, str2) {
  if (JSON.stringify(str1) === JSON.stringify(str2)) {
    return true;
  } else {
    return false;
  }
};
module.exports = eqArrays;