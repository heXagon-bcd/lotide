//function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
const takeUntil = function(array, callback) {
  let arr1 = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {//truthy if array[i] < 0
      return arr1;//
    }
    arr1.push(array[i]);//if true, push array[i] to arr1
  }
  return arr1;//  return if false
};

module.exports = takeUntil;