// function that takes in an array and returns middle most element of the array.
const middle = function(array) {
  if (array.length <= 2) {
    return[];
  }
  let midNum = array.length / 2;
  if (array.length % 2 !== 0) {
    return [array[Math.floor(midNum)]];
  } else if (array.length % 2 === 0) {
    return array.slice(Math.floor(midNum) - 1, Math.ceil(midNum) + 1);
  }
};

module.exports = middle ;