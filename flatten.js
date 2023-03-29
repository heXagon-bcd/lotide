/**
 * This method will flatten an arrays with nested arrays
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 * TEST
 * console.log(flatten([1, 2, [3, 4], 5, [6]])); -> [1, 2, 3, 4, 5, 6];
 */

//FUNCTTION
//Create function
const flatten = function(arr) {
  let arr1 = [];
  //Create two loops, one to go through the array, the second to go through the second array
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object") {
      arr1.push(arr[i]);
      // if the element is an array, then push out the elemnts of the nested array.
    } else if (typeof arr[i] === "object") {
      for (let x = 0; x < arr[i].length; x++) {
        arr1.push(arr[i][x]);
      }
    }
  }
  return arr1;
};

module.exports = flatten;