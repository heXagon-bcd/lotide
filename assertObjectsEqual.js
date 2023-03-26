/**
 * This method will detmerine if objects have the same values
 * @param {object}input first object that you want to compare
 * @param {object}input second object that you want to compare
 * @return {assert pass or fail}
 * TEST
 * const shirtObject = { color: "red", size: "medium" };
 * const anotherShirtObject= { size: "medium", color: "red" };
 * eqObjects(shirtObject , anotherShirtObject); // => true
 */

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


//Eq objects
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  for (let ky in object1) {
    if (object1[ky] === object2[ky] && arr1.length === arr2.length) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = eqObjects;