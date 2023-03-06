
//ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    console.log(`✅✅✅ assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 assertion failed: ${actual} != ${expected}`);
  }

};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  //console.log(arr1)
  let arr2 = Object.keys(object2);
  for(ky in object1) {
    console.log(object1[ky], object2[ky])
    if (object1[ky] === object2[ky] && arr1.length === arr2.length ) {
      return true
    } else {
      return false
    }
  }
};


const shirtObject = { color: "red", size: "medium" };
//let arr1 = [Object.keys(shirtObject)];//returns an array for key
// console.log(arr1)

const anotherShirtObject= { size: "medium", color: "red" };


eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);