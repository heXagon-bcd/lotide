/**
 * This method determines the first value of an array
 * @param {boolean compare values} testing strings or numbers to see if they match
 * @return {assert pass or fail}
 * TEST CODE
 * head([5,6,7] => will result in 5
 */

const head = function(arr) {
  let a = arr[0];
  return a;
};

module.exports = head;