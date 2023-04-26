//function that takes in an array and returns everything except the first element of the array.
const tail = function(arr) {
  let a = arr.slice(1)
  return a;
}

module.exports = tail;