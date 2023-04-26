//function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object") {
      arr1.push(arr[i]);
    } else if (typeof arr[i] === "object") {
      for (let x = 0; x < arr[i].length; x++) {
        arr1.push(arr[i][x]);
      }
    }
  }
  return arr1;
};

module.exports = flatten;