//function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function(arr, val) {
  let arr1 = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter = 0;
    for (let x = 0; x < val.length; x++) {
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