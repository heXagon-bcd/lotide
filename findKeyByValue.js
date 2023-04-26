//function that takes in an object and a value and returns the first key that corresponds to that value.
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, show) {
  let arr = [];
  for (let ky in obj) {
    if (obj[ky] === show) {
      arr.push(ky);
    }
  }
  return arr[0];// ask dev to review this🛑🛑🛑
};

module.exports = findKeyByValue;