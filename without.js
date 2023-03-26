/**
 * The below function creates an array excluding all given values
 * @param {array} array the array to inspect
 * @param {value} value to remove from string
 * @returns {array} Returns the new array without filtered value
 * TEST CODE
 * console.log(without([1, 2, 3], [1])) // => [2, 3]
 * console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
 */

//create function
const without = function(arr, val) {
//create array
  let arr1 = [];
  let counter = 0;
  //write loop to check if there's the value equals the toher value. write 2 for loops.
  for (let i = 0; i < arr.length; i++) {
    counter = 0;
    for (let x = 0; x < val.length; x++) {
    // boolean conditional to see if array index value =  val  value
      if (arr[i] === val[x]) {
        counter ++;
      }
    }
    if (counter === 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};

module.exports = {without};